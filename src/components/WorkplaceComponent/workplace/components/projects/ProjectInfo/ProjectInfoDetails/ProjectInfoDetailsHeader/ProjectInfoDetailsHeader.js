import React, {Component} from "react";

import "./ProjectInfoDetailsHeader.css";
import HeaderElement from "./HeaderElement/HeaderElement";

export default class ProjectInfoDetailsHeader extends Component { 
    constructor(props) {
        super(props);

        this.handleDocumentsClick = this.handleDocumentsClick.bind(this);
        this.handleParticipantsClick = this.handleParticipantsClick.bind(this);
    }

    handleParticipantsClick() {
        this.props.switchProjectDetailsMode(0);
    }

    handleDocumentsClick() {
        this.props.switchProjectDetailsMode(1);
    }

    render() {
        return (
            <div className = "project-details-header-container">
                <HeaderElement name = "Participants" handleElementClick = {this.handleParticipantsClick} />
                <HeaderElement name = "Documents" handleElementClick = {this.handleDocumentsClick} />
            </div>
        )
    }
}