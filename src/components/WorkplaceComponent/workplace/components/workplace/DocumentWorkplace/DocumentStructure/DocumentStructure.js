import React, {Component, lazy} from "react";

//Styles
import "./DocumentStructureStyles.css";

//Components
const DocumentStructureHeader = lazy(() => import("./DocumentStructureHeader/DocumentStructureHeader"));
const DocumentTree = lazy(() => import("./DocumentTree/DocumentTree"))

export default class DocumentStructure extends Component{ 
    constructor(props) { 
        super(props);

        this.paragraphs = [
            { name: "Hello"},
            { name: "World", paragraphs: [
                { name: "Goodbye", paragraphs: [
                    {name: "Aero"}
                ]},
                { name: "World",}
            ]}
        ]
    }

    render() { 
        let openedTreeItem = { 
            name: "Введение"
        };

        return ( 
            <div id = "documentStructureOutterCont">
                <DocumentStructureHeader openedTreeItem = {openedTreeItem}/>
                <DocumentTree paragraphs = {this.paragraphs}/>
            </div>
        )
    }
}