import React, {Component, lazy} from "react"

//Styles
import "./DocumentWorkplaceStyles.css"
import DocumentStructureService from "../../../../../../services/DocumentStructureService/DocumentStructureService";
import {alertAppMessage} from "../../../../../ApplicationMessage/ApplicationMessageManager";

//Components
const DocumentStructure = lazy(() => import("./DocumentStructure/DocumentStructure"));
const DocumentContent = lazy(() => import("./DocumentContent/DocumentContent"));
const DocumentStorage = lazy(() => import("../DocumentStorage/DocumentStorage"));


/**
 * PROPS LIST:
 * 1) setDocumentID - sets the id of selected document
 * 2) documentID
 */
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
                                   currentDocumentStructureID = {this.props.currentDocumentStructureID}/>
                <DocumentContent />
            </div>
        )
    }
}