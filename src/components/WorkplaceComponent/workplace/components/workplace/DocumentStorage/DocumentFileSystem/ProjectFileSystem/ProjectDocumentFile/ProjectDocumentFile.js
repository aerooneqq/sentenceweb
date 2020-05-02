import React, {Component} from "react";

import "./ProjectDocumentFile.css";

import projectDocumentIcon from "./img/project_document_file.svg"

export default class ProjectDocumentFile extends Component {
    constructor(props) { 
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.getDocumentStructure(this.props.document.documentID);
    }

    render() {
        return (
            <div className = "project-document-file-container"
                 onClick = {this.handleClick}>
                <img className = "project-document-file-icon" src = {projectDocumentIcon} />
                <span className = "project-document-file-name">
                    {this.props.document.documentName}
                </span>
            </div>
        )
    }
}