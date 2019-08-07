import React, {Component, lazy} from "react";
import Loader from "../../../../../../loader/Loader";

//Model classes
import DocumentTreeModel from "./Models/DocumentTreeModel";

//Styles
import "./DocumentStructureStyles.css";

//Components
const DocumentStructureHeader = lazy(() => import("./DocumentStructureHeader/DocumentStructureHeader"));
const DocumentTreeComponent = lazy(() => import("./DocumentTree/DocumentTreeComponent"));
const DocumentTreeItem = lazy(() => import("./DocumentTree/DocumentTreeItem/DocumentTreeItem"));

export default class DocumentStructure extends Component{ 
    constructor(props) { 
        super(props);

        this.documentTreeModel = new DocumentTreeModel([
            { id: 0, name: "Introduction", level: 0, opened: false, selected: false, type: "list"},
            { id: 1, name: "The rules of quantum mexhanics", paragraphs: [
                { id: 2, name: "Quarks and fucsk", paragraphs: [
                    { id: 3, name: "Hello world what a beautiful day no rain pls", level: 2, opened: false, selected: false, type: "content"}
                ], level: 1, opened: false, selected: false, type: "list"},
                { id: 4, name: "Table of contents", level: 1, opened: false, selected: false, type: "content"}
            ], level: 5, opened: false, selected: false, type: "list"}
        ]);

        this.state = { 
            openedParagraph: null,
            paragraphsTreeComponent: <Loader message = "Loading document tree..."/>
        }

        this.changeCurrentContentParagraph = this.changeCurrentContentParagraph.bind(this);
        this.findContentParagrahsWithName = this.findContentParagrahsWithName.bind(this);
        this._showAllTree = this._showAllTree.bind(this);
    }

    componentDidMount() { 
        this._showAllTree();
    }

    _showAllTree() { 
        this.setState({
            paragraphsTreeComponent: this.documentTreeModel.paragraphs().map(paragraph => 
                <DocumentTreeComponent paragraph = {paragraph} changeCurrentContentParagraph = {this.changeCurrentContentParagraph}/>)
        });
    }

    /**
     * Changes the current selected paragraph and uploads the content of this paragraph to the main workplace
     * @param {the id of the paragraph which was selected} id 
     */
    changeCurrentContentParagraph(paragraph) { 
        alert(paragraph.name);
        this.setState({ 
            openedParagraph: paragraph
        });
    }

    findContentParagrahsWithName(name) { 
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
                                         findContentParagrahsWithName = {this.findContentParagrahsWithName} />
                <div id = "documentTreeOutterContainer">
                    <div id = "documentTreeInnerContainer">
                        {this.state.paragraphsTreeComponent}
                    </div>
                </div>
            </div>      
        )
    }
}