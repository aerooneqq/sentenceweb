import React, {Component, lazy} from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

//Model classes
import Loader from "../../../../../../loader/Loader";

//Styles
import "./DocumentStructureStyles.css";
import DocumentStructureService from "../../../../../../../services/DocumentStructureService/DocumentStructureService";
import DocumentStructureTree from "./DocumentStructureTree";
import {alertAppMessage} from "../../../../../../ApplicationMessage/ApplicationMessageManager";

//Components
const DocumentStructureHeader = lazy(() => import("./DocumentStructureHeader/DocumentStructureHeader"));

export default class DocumentStructure extends Component{ 
    constructor(props) { 
        super(props);

        this.state = { 
            openedParagraph: null,
            documentTree: null,
            paragraphsTreeComponent: <Loader message = "Loading document tree..."/>,
            structureData: null
        };

        this.documentStructureService = new DocumentStructureService(localStorage.getItem("token"));

        this.changeCurrentContentParagraph = this.changeCurrentContentParagraph.bind(this);
        this.addListItem = this.addListItem.bind(this);
        this.addContentItem = this.addContentItem.bind(this);
        this.renameItem = this.renameItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
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

    addListItem(itemID) {
        this.documentStructureService.addListItem(itemID, this.props.currentDocumentStructureID)
            .then(res => {
                this.props.getDocumentStructure(this.props.documentID);
            })
            .catch(er => {
                if (er.response) {
                    alertAppMessage(er.response.data);
                }
                else {
                    alertAppMessage("Error ocured while creating new item");
                }
            })
    }

    addContentItem(itemID) {
        this.documentStructureService.addContentItem(itemID, this.props.currentDocumentStructureID)
            .then(res => {
                this.props.getDocumentStructure(this.props.documentID);
            })
            .catch(er => {
                if (er.response) {
                    alertAppMessage(er.response.data);
                }
                else {
                    alertAppMessage("Error ocured while creating new item");
                }
            })
    }

    renameItem(itemID, newName) {
        this.documentStructureService.renameItem(itemID, this.props.currentDocumentStructureID, newName)
            .then(res => {
                this.props.getDocumentStructure(this.props.documentID);
            })
            .catch(er => {
                if (er.response) {
                    alertAppMessage(er.response.data);
                }
                else {
                    alertAppMessage("Error ocured while creating new item");
                }
            })
    }

    deleteItem(itemID) {
        alert("ASdasd")
        this.documentStructureService.deleteDocumentItem(this.props.currentDocumentStructureID, itemID)
            .then(res => {
                this.props.getDocumentStructure(this.props.documentID);
            })
            .catch(er => {
                if (er.response) {
                    alertAppMessage(er.response.data);
                }
                else {
                    alertAppMessage("Error ocured while creating new item");
                }
            })
    }

    render() { 
        return ( 
            <div id = "documentStructureOutterCont">
                <DocumentStructureHeader openedParagraph = {this.state.openedParagraph}
                                         findContentParagrahsWithName = {this.findContentParagraphsWithName} />
                <div id = "documentTreeOutterContainer">
                    <div id = "documentTreeInnerContainer">
                        <DndProvider backend = {HTML5Backend}>
                            <DocumentStructureTree data = {this.props.documentStructureRawData}
                                                   changeCurrentContentParagraph = {this.changeCurrentContentParagraph}
                                                   documentID = {this.props.documentID}
                                                   addListItem = {this.addListItem}
                                                   addContentItem = {this.addContentItem}
                                                   renameItem = {this.renameItem}
                                                   deleteItem = {this.deleteItem}
                                                   getDocumentContent = {this.props.getDocumentContent}/>
                        </DndProvider>
                    </div>
                </div>
            </div>      
        )
    }
}