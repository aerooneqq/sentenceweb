import React, {Component} from "react";

import "./Document.css";
import documentIcon from "./img/document.svg";
import removeFromProject from "./img/remove_from_project.svg";

import AdminControlElement from "../../Participants/Participant/AdminControlElement/AdminControlElement";

export default class Document extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "document-container">
                <img className = "document-icon" src = {documentIcon} />
                <div className = "document-name">
                    {this.props.document.documentName}
                </div>
                <div className = "">
                    <AdminControlElement icon = {removeFromProject}/>
                </div>
            </div>
        )
    }
}