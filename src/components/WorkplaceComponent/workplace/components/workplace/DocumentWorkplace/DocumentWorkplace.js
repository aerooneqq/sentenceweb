import React, {Component, lazy} from "react"

//Styles
import "./DocumentWorkplaceStyles.css"

//Components
const DocumentStructure = lazy(() => import("./DocumentStructure/DocumentStructure"));
const DocumentContent = lazy(() => import("./DocumentContent/DocumentContent"));
const DocumentStorage = lazy(() => import("../DocumentStorage/DocumentStorage"));


/**
 * PROPS LIST:
 * 1) setDocumentID - sets the id of selected document
 */
export default class DocumentWorkplace extends Component { 
    
    constructor(props) { 
        super(props);

        this.state = {
            currentDocumentID: null,
        }
    }

    render() { 
        return ( 
            <div id = "documentWorkplaceComponentOutterCont">
                <DocumentStorage setDocumentID = {this.props.setDocumentID}/>
                <DocumentStructure documentID = {this.props.documentID} />
                <DocumentContent />
            </div>
        )
    }
}