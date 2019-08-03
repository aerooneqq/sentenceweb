import React, {Component, lazy} from "react"

//Styles
import "./DocumentHeaderCellStyles.css"
import "../../../../../../../AppStyles.css"

//Components
const SaveOrCloseDoc = lazy(() => import("./SaveOrCloseDoc/SaveOrCloseDoc"));

export default class DocumentHeaderCell extends Component { 
    constructor(props) { 
        super(props);

        this.changeSelectedDocument = this.changeSelectedDocument.bind(this);
    }

    changeSelectedDocument() { 
        this.props.changeSelectedDocument(this.props.openedDoc.id);
    }

    render() { 
        return ( 
            <div className = {"documentHeaderCell " + (this.props.openedDoc.isSelected === true ? "documentHeaderCellClilcked" : "")}
                 onClick = {this.changeSelectedDocument}>
                <div className = "documentHeaderCellIcon">
                </div>
                <div className = "documentHeaderCellName unselectableText">
                    {this.props.openedDoc.name}
                </div>
                <SaveOrCloseDoc isSaved = {this.props.openedDoc.isSaved}/>
            </div>
        )
    }
}