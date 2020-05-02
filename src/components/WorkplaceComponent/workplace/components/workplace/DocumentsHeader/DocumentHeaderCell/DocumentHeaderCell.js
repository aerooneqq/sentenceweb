import React, {Component, lazy} from "react";

//Icons
import documentIcon from "./img/workplace_header_document_icon.svg";

//Styles
import "./DocumentHeaderCellStyles.css";
import "../../../../../../../AppStyles.css";

//Components
const SaveOrCloseDoc = lazy(() => import("./SaveOrCloseDoc/SaveOrCloseDoc"));

export default class DocumentHeaderCell extends Component { 
    constructor(props) { 
        super(props);

        this.changeSelectedDocument = this.changeSelectedDocument.bind(this);
    }

    changeSelectedDocument() { 
        this.props.changeSelectedDocument(this.props.openedDoc.documentID);
    }

    render() { 
        return ( 
            <div className = {"documentHeaderCell " + (this.props.openedDoc.isSelected === true ? "documentHeaderCellClilcked" : "")}
                 onClick = {this.changeSelectedDocument}>
                <div className = "documentHeaderCellIcon">
                    <img src = {documentIcon} alt = "" />
                </div>
                <div className = "documentHeaderCellName unselectableText">
                    {this.props.openedDoc.documentName}
                </div>
                <SaveOrCloseDoc isSaved = {this.props.openedDoc.isSaved}/>
            </div>
        )
    }
}