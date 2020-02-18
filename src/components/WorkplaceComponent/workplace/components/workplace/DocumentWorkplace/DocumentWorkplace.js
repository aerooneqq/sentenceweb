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

        this.state = {
            documentStructureRaw: null,
            currentDocumentID: null,
            isStructureLoading: false,
            isContentLoading: true,
        }

        this.documentStructureService = new DocumentStructureService(localStorage.getItem("token"));

        this.getDocumentStructureContent = this.getDocumentStructureContent.bind(this);
        this.getDocumentContent = this.getDocumentContent.bind(this);
    }

    getDocumentStructureContent(documentID) {
        this.setState({
            isStructureLoading: true
        }, () => {
            this.documentStructureService.getDocumentStructure(documentID)
                .then(res => {
                    this.setState({
                        documentStructureRaw: res.data,
                        isStructureLoading: false
                    });
                })
                .catch(er => {
                    if (er.response) {
                        alertAppMessage(er.response.data, "error");
                    }
                    else {
                        alertAppMessage("Error occured while getting your feed", "error");
                    }

                    this.setState({
                        isStructureLoading: false
                    });
                });
        });
    }

    getDocumentContent(documentID) {

    }

    render() { 
        return ( 
            <div id = "documentWorkplaceComponentOutterCont">
                <DocumentStorage setDocumentID = {this.props.setDocumentID}
                                 getDocumentStructure = {this.getDocumentStructureContent}
                                 getDocumentContent = {this.getDocumentContent}/>
                <DocumentStructure documentID = {this.props.documentID}
                                   documentStructureRawData = {this.state.documentStructureRaw}
                                   isStructureLoading = {this.state.isStructureLoading} />
                <DocumentContent />
            </div>
        )
    }
}