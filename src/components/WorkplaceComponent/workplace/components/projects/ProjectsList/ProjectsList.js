import React, {Component} from "react";

import "./ProjectsList.css";
import Project from "./Project/Project";
import ProjectService from "../../../../../../services/Projects/ProjectService";
import ResponseService from "../../../../../../services/ResponseService/ReponseService";
import CreateNewProjectBtn from "./CreateNewProjectBtn/CreateNewProjectBtn";
import { showInputMessageBox } from "../../../../../MessageInputBox/MessageInputBoxManager";
import { alertAppMessage } from "../../../../../ApplicationMessage/ApplicationMessageManager";


export default class ProjectsList extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            projects: [],
        }
        
        this.responseService = new ResponseService();
        this.projectService = new ProjectService(localStorage.getItem("token"));

        this.createNewProject = this.createNewProject.bind(this);
        this._getTemplates = this._getTemplates.bind(this);
    }

    componentDidMount() {
        this._getTemplates();
    }

    _getTemplates() {
        this.projectService.getUserProjects()
            .then(res => {
                this.setState({
                    projects: res.data,
                })
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while getting user projects");
            });
    }

    createNewProject() {
        showInputMessageBox("Enter project params", [{title: "Name"}, {title: "Description"}],
            (values) => {
                this.projectService.createProject(values["Name"], values["Description"])
                    .then(res => {
                        this._getTemplates();
                    })
                    .catch(err => {
                        this.responseService.alertErrorMessage(err, "Error ocurred while creating project");
                    })
            }, () => {
                alertAppMessage("Error ocurred while getting projects ")
            });
    }

    render() {
        return (
            <div className = "projects-list-outer-container">
                <div className = "projects-list-container">
                    {this.state.projects.map(project => <Project project = {project}
                                                                changeSelectedProject = {this.props.changeSelectedProject}/>)}
                </div>

                <CreateNewProjectBtn createNewProject = {this.createNewProject} />
            </div>
        )
    }
}