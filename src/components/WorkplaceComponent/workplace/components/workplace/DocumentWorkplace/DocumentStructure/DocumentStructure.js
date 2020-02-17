import React, {Component, lazy} from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

//Model classes
import DocumentTreeModel from "./Models/DocumentTreeModel";
import Loader from "../../../../../../loader/Loader";

//Styles
import "./DocumentStructureStyles.css";
import DocumentStructureService from "../../../../../../../services/DocumentStructureService/DocumentStructureService";
import DocumentStructureTree from "./DocumentStructureTree";
import {alertAppMessage} from "../../../../../../ApplicationMessage/ApplicationMessageManager";

//Components
const DocumentStructureHeader = lazy(() => import("./DocumentStructureHeader/DocumentStructureHeader"));
const DocumentTreeComponent = lazy(() => import("./DocumentTree/DocumentTreeComponent"));
const DocumentTreeItem = lazy(() => import("./DocumentTree/DocumentTreeItem/DocumentTreeItem"));

export default class DocumentStructure extends Component{ 
    constructor(props) { 
        super(props);

        this.documentTreeModel = new DocumentTreeModel();

        this.state = { 
            openedParagraph: null,
            documentTree: null,
            paragraphsTreeComponent: <Loader message = "Loading document tree..."/>
        };

        this.documentStructureService = new DocumentStructureService(localStorage.getItem("token"));

        this.changeCurrentContentParagraph = this.changeCurrentContentParagraph.bind(this);
        this.findContentParagraphsWithName = this.findContentParagraphsWithName.bind(this);
    }

    componentDidMount() {
        this._getDocumentStructure(this.props.documentID);
    }

    /**
     * Changes the current selected paragraph and uploads the content of this paragraph to the main workplace
     * @param {the id of the paragraph which was selected} id 
     */
    changeCurrentContentParagraph(paragraph) { 
        this.setState({ 
            openedParagraph: paragraph
        });
    }

    async _getDocumentStructure(documentID) {
        alert(this.props.documentID);

        let response = await this.documentStructureService.getDocumentStructure(documentID);

        if (response.status !== 200) {
            if (response.data) {
                alertAppMessage(response.data, "error");
            }
            else {
                alertAppMessage("Error occured while getting your feed", "error");
            }

            return [];
        }
        else {
            let documentTree = { paragraphs: [] };
            this._constructTreeFromStructureRecursive(documentTree, response.data.items, {id: 0}, 0);
            this.setState({
                documentTree: documentTree
            });
        }
    }

    findContentParagraphsWithName(name) {
        if (name === "" || name === undefined || name === null) {
            this._showAllTree();
        }
        else {
            this.setState(() => {
                return {
                    paragraphsTreeComponent: this.documentTreeModel.getContentParagraphs(name).map(paragraph => {
                        return (<DocumentTreeItem paragraph = {paragraph} handleTreeItemClick = {this.changeCurrentContentParagraph}/>);
                    })
                }
            });
        }
    }

    render() { 
        return ( 
            <div id = "documentStructureOutterCont">
                <DocumentStructureHeader openedParagraph = {this.state.openedParagraph}
                                         findContentParagrahsWithName = {this.findContentParagraphsWithName} />
                <div id = "documentTreeOutterContainer">
                    <div id = "documentTreeInnerContainer">
                        <DndProvider backend = {HTML5Backend}>
                            <DocumentStructureTree paragraphs = {this.state.documentTree}
                                                   changeCurrentContentParagraph = {this.changeCurrentContentParagraph} />
                        </DndProvider>
                    </div>
                </div>
            </div>      
        )
    }
}