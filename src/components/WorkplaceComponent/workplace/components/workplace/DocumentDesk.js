import React, {Component, lazy} from "react"

//Styles
import "./DocumentDeskStyles.css"

//Components
const DocumentsHeader = lazy(() => import("./DocumentsHeader/DocumentsHeader"));
const DocumentWorkplace = lazy(() => import("./DocumentWorkplace/DocumentWorkplace"));

export default class DocumentDesk extends Component{ 
    constructor(props){ 
        super(props);

        this.state = {
            currentDocumentID: null,
        };

        this.setDocumentID = this.setDocumentID.bind(this);
    }

    setDocumentID(documentID) {
        if (!(documentID === null || documentID === undefined)) {
            this.setState({
                currentDocumentID: documentID
            });
        }
    }

    render() { 
        return ( 
            <div id = "documentDeskContainer">
                <DocumentsHeader setDocumentID = {this.setDocumentID} />
                <DocumentWorkplace documentID = {this.state.currentDocumentID}
                                   setDocumentID = {this.setDocumentID} />
            </div>
        )
    }

}