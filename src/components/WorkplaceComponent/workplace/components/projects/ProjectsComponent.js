import React, {Component} from "react";

import "./ProjectsComponent.css";
import ProjectsList from "./ProjectsList/ProjectsList";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import ProjectService from "../../../../../services/Projects/ProjectService";
import ResponseService from "../../../../../services/ResponseService/ReponseService";

export default class ProjectsComponent extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            selectedProjectID: null,
            selectedProject: null
        }

        this.responseService = new ResponseService();
        this.projectService = new ProjectService(localStorage.getItem("token"));

        this.changeSelectedProject = this.changeSelectedProject.bind(this);
    }

    changeSelectedProject(projectID) {
        this.projectService.getProjectInfo(projectID)
            .then(res => {
                this.setState({
                    selectedProjectID: projectID,
                    selectedProject: res.data,
                })
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while getting project info")
            })
    }

    render() {
        return (
            <div className = "projects-component-outer-container">
                <ProjectsList changeSelectedProject = {this.changeSelectedProject}/>
                <ProjectInfo project = {this.state.selectedProject} />
            </div>
        )
    }
}