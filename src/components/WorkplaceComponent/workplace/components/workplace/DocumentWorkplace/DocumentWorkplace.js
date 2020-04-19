import React, {Component, lazy} from "react"

//Styles
import "./DocumentWorkplaceStyles.css"
import DocumentStructureService from "../../../../../../services/DocumentStructureService/DocumentStructureService";
import {alertAppMessage} from "../../../../../ApplicationMessage/ApplicationMessageManager";
import DocumentElementsService from "../../../../../../services/DocumentElementService/DocumentElementService";

//Components
const DocumentStructure = lazy(() => import("./DocumentStructure/DocumentStructure"));
const DocumentContent = lazy(() => import("./DocumentContent/DocumentContent"));
const DocumentStorage = lazy(() => import("../DocumentStorage/DocumentStorage"));

export default class DocumentWorkplace extends Component { 
    
    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div id = "documentWorkplaceComponentOutterCont">
                <DocumentStorage getDocumentStructure = {this.props.getDocumentStructureContent}
                                 getDocumentContent = {this.props.getDocumentContent}/>
                <DocumentStructure documentID = {this.props.currentDocumentID}
                                   documentStructureRawData = {this.props.documentStructureRaw}
                                   isStructureLoading = {this.props.isStructureLoading}
                                   getDocumentStructure = {this.props.getDocumentStructureContent}
                                   currentDocumentStructureID = {this.props.currentDocumentStructureID}
                                   getDocumentContent = {this.props.getDocumentContent}/>
               <DocumentContent isContentLoading = {this.props.isContentLoading}
                                 documentElements = {this.props.documentElements}
                                 createNewElement = {this.props.createNewElement}
                                 documentID = {this.props.currentDocumentID}
                                 parentItemID = {this.props.parentItemID} />
            </div>
        )
    }
}