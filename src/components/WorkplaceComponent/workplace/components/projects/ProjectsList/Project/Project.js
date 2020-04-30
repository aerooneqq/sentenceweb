import React, {Component} from "react";

import "./Project.css";

import projectLogo from "./img/project_default_icon.svg";

export default class Project extends Component { 
    constructor(props) { 
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() { 
        this.props.changeSelectedProject(this.props.project.id);
    }

    render() {
        return (
            <div className = "project-outer-container" onClick = {this.handleClick}>
                <img className = "project-info-photo" src = {projectLogo} />
                <div className = "project-info">
                    <div className = "project-name-info">
                        {this.props.project.name}
                    </div>
                    <div className = "project-creation-date">
                        {this.props.project.createdAt.substr(0, 10  )}
                    </div>
                </div>
            </div>
        )
    }
}