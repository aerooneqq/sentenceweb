import React, {Component} from "react";

import "./ProjectFile.css";
import projectFileIcon from "./img/project_file_icon.svg";

export default class ProjectFile extends Component {
    constructor(props) {
        super(props);

        this.handleProjectFileClick = this.handleProjectFileClick.bind(this);
    }

    handleProjectFileClick() {
        this.props.handleClick(this.props.project.id);
    }

    render() {
        return (
            <div className = "project-file-outer-container"
                 onClick = {this.handleProjectFileClick}>
                <img className = "project-file-icon" src = {projectFileIcon} />
                <span className = "project-file-name">
                    {this.props.project.name}
                </span>
            </div>
        )
    }
}