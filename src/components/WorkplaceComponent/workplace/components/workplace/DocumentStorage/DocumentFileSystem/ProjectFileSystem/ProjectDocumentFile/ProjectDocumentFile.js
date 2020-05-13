import React, {Component} from "react";
import saveAs from "file-saver"

import {alertAppMessage} from "../../../../../../../../ApplicationMessage/ApplicationMessageManager"

import "./ProjectDocumentFile.css";
import WordService from "../../../../../../../../../services/Word/WordService"

import projectDocumentIcon from "./img/project_document_file.svg"
import fileDownload from "js-file-download";

export default class ProjectDocumentFile extends Component {
    constructor(props) { 
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.wordService = new WordService(localStorage.getItem("token"));

        this.downloadWordDocument = this.downloadWordDocument.bind(this);
    }

    handleClick() {
        this.props.getDocumentStructure(this.props.document.documentID);
    }

    downloadWordDocument() {
        this.wordService.getDownloadLink(this.props.document.documentID)
            .then(res => {
                window.open(`http://localhost:3002/documentsapi/word/wordDocument?downloadLinkID=${res.data.ID}`, '_blank');          
            })
            .catch(err => {
                if (err.response) {
                    alertAppMessage(err.response.data, "error");
                }
                else {
                    alertAppMessage("Error occured while getting your feed", "error");
                }
            })
    }

    render() {
        return (
            <div className = "project-document-file-container"
                 onClick = {this.handleClick}>
                <img className = "project-document-file-icon" src = {projectDocumentIcon} />
                <span className = "project-document-file-name">
                    {this.props.document.documentName}
                </span>
                <span onClick = {this.downloadWordDocument} className = "project-document-file-name">
                    Download word
                </span>
            </div>
        )
    }
}

function toUTF8Array(str) {
    var myBuffer = [];
    var buffer = new Buffer(str, 'ascii');
    for (var i = 0; i < buffer.length; i++) {
        myBuffer.push(buffer[i]);
    }

    return myBuffer;
}