import React, {Component} from "react";

import "./ProjectInfoHeader.css";
import projectIcon from "./img/project_default_icon.svg";
import ContentEditableSpan from "../../../../../../ContentEditable/ContentEditableSpan"
import ProjectService from "../../../../../../../services/Projects/ProjectService";
import { local } from "d3";
import { alertAppMessage } from "../../../../../../ApplicationMessage/ApplicationMessageManager";
import ResponseService from "../../../../../../../services/ResponseService/ReponseService";

export default class ProjectInfoHeader extends Component {
    constructor(props) { 
        super(props);
        
        this.name = props.project.name;
        this.description = props.project.description;

        this.projectService = new ProjectService(localStorage.getItem("token"));
        this.responseService = new ResponseService();

        this.handleProjectDescriptionChange = this.handleProjectDescriptionChange.bind(this);
        this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
        this.updateProject = this.updateProject.bind(this);
    }
    
    handleProjectNameChange(newName) {
        this.name = newName;
    }

    handleProjectDescriptionChange(newDescription) {
        this.description = newDescription;
    }

    updateProject() {
        this.projectService.updateProjectNameAndDesc(this.props.project.id, this.name, this.description)
            .then(res => {
                alertAppMessage("The project name and description were updated", "success");
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while updating project");
            })
    }

    render() {
        return (
            <div className = "project-info-top-header">
                <div className = "project-info-left-icon-container">
                    <img className = "project-info-top-icon" src = {projectIcon} />
                </div>

                <div className = "project-text-info">
                    <span className = "project-text-info-property">
                        Project name
                    </span>
                    <ContentEditableSpan text = {this.props.project.name}
                                         fontSize = {24}
                                         color = "#000000"
                                         onChange = {this.handleProjectNameChange}/>
                    <span className = "project-text-info-property">
                        Description
                    </span>
                    <ContentEditableSpan text = {this.props.project.description}
                                         fontSize = {18}
                                         color = "#505050"
                                         onChange = {this.handleProjectDescriptionChange}/>
                    <button className = "project-info-save-top-changes-btn"
                            onClick = {this.updateProject}>
                        Save changes
                    </button>
                </div>
            </div>
        )
    }
}