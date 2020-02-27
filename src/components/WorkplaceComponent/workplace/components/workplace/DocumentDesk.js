import React, {Component, lazy} from "react"

//Styles
import "./DocumentDeskStyles.css"
import DocumentHeaderService from "../../../../../services/DocumentsHeaderService/DocumentHeaderService";
import {alertAppMessage} from "../../../../ApplicationMessage/ApplicationMessageManager";
import DocumentStructureService from "../../../../../services/DocumentStructureService/DocumentStructureService";

//Components
const DocumentsHeader = lazy(() => import("./DocumentsHeader/DocumentsHeader"));
const DocumentWorkplace = lazy(() => import("./DocumentWorkplace/DocumentWorkplace"));

export default class DocumentDesk extends Component{ 
    constructor(props){ 
        super(props);

        this.state = {
            currentDocumentID: null,
            headerOpenedDocs: [],
            documentStructureRaw: null,
            currentDocumentStructureID: null,
            isStructureLoading: false,
            isContentLoading: true,
            itemContent: []
        };

        this.documentHeaderService = new DocumentHeaderService(localStorage.getItem("token"));
        this.documentStructureService = new DocumentStructureService(localStorage.getItem("token"));

        this.getDocumentHeaderState = this.getDocumentHeaderState.bind(this);
        this.openDocumentFromDocumentsHeader = this.openDocumentFromDocumentsHeader.bind(this);
        this.addDocumentToDocumentHeader = this.addDocumentToDocumentHeader.bind(this);
        this.removeDocumentFromHeader = this.removeDocumentFromHeader.bind(this);
        this.getDocumentContent = this.getDocumentContent.bind(this);
        this.getDocumentStructureContent = this.getDocumentStructureContent.bind(this);
    }

    getDocumentHeaderState() {
        this.documentHeaderService.getDocumentDeskState()
            .then(res => {
               this.setState({
                   headerOpenedDocs: res.data.documentTopBarInfos
               });
            })
            .catch(er => {
                if (er.response) {
                    alertAppMessage(er.response.data, "error");
                }
                else {
                    alertAppMessage("Error occured while getting your feed", "error");
                }
            });
    }

    openDocumentFromDocumentsHeader(documentID) {
        this.setState({
            currentDocumentID: documentID
        });
    }

    addDocumentToDocumentHeader(documentID) {
        this.documentHeaderService.addDocumentToHeader(documentID)
            .then(res => {
                this.getDocumentHeaderState();
            })
            .catch(er => {
                if (er.response) {
                    alertAppMessage(er.response.data, "error");
                }
                else {
                    alertAppMessage("Error occured while getting your feed", "error");
                }
            })
    }

    removeDocumentFromHeader(documentID) {
        this.documentHeaderService.removeDocumentFromHeader(documentID)
            .then(res => {
                this.getDocumentHeaderState();
            })
            .catch(er => {
                if (er.response) {
                    alertAppMessage(er.response.data, "error");
                }
                else {
                    alertAppMessage("Error occured while getting your feed", "error");
                }
            })
    }

    getDocumentStructureContent(documentID) {
        this.addDocumentToDocumentHeader(documentID);
        this.setState({
            isStructureLoading: true,
            currentDocumentID: documentID,
        }, () => {
            this.documentStructureService.getDocumentStructure(documentID)
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        documentStructureRaw: res.data,
                        isStructureLoading: false,
                        currentDocumentStructureID: res.data.ID,
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

    getDocumentContent(itemID) {
        this.setState({
            isContentLoading: true,
        }, () => {
            this.documentElementsService.getDocumentElements(itemID).
                then(res => {
                    this.setState({
                        documentElements: res.data,
                        isLoading: false
                    })
                })
                .catch(er => {
                    this.setState({
                        isLoading: false
                    });

                    if (er.response) {
                        alertAppMessage(er.response.data, "error");
                    }
                    else {
                        alertAppMessage("Error occured while getting your feed", "error");
                }
            });
        })
    }

    changeSelectedDocumentInHeader(id) {
        this.setState(prevState => {
            for (let openedDoc of prevState.headerOpenedDocs) {
                openedDoc.isSelected = false;

                if (openedDoc.id === id){
                    openedDoc.isSelected = true;
                }
            }

            return {
                headerOpenedDocs: prevState.headerOpenedDocs
            }
        })
    }

    render() { 
        return ( 
            <div id = "documentDeskContainer">
                <DocumentsHeader openedDocuments = {this.state.headerOpenedDocs}
                                 changeSelectedDocumentInHeader = {this.changeSelectedDocumentInHeader}
                                 getDocumentHeaderState = {this.getDocumentHeaderState}/>
                <DocumentWorkplace currentDocumentID = {this.state.currentDocumentID}
                                   documentStructureRaw = {this.state.documentStructureRaw}
                                   isStructureLoading = {this.state.isStructureLoading}
                                   currentDocumentStructureID = {this.state.currentDocumentStructureID}
                                   getDocumentStructureContent = {this.getDocumentStructureContent}
                                   getDocumentContent = {this.getDocumentContent}
                                   isContentLoading = {this.state.isContentLoading}
                                   itemContent = {this.state.isContentLoading} />
            </div>
        )
    }

}