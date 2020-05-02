import React, {Component} from "react";

import "./ProjectFileSystem.css";

import ProjectService from "../../../../../../../../services/Projects/ProjectService"
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";
import ProjectFile from "./ProjectFile/ProjectFile";
import ProjectDocumentFile from "./ProjectDocumentFile/ProjectDocumentFile";

export default class ProjectFileSystem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            documents: [],
        }

        this.projectService = new ProjectService(localStorage.getItem("token"));
        this.responseService = new ResponseService();

        this.showProjectDocuments = this.showProjectDocuments.bind(this);
        this._getElements = this._getElements.bind(this);
    }

    componentDidMount() {   
        this.projectService.getUserProjects()
            .then(res => {
                this.setState({
                    projects: res.data,
                })
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while getting projects info");
            })
    }

    showProjectDocuments(projectID) {
        this.projectService.getProjectDocuments(projectID)
            .then(res => {
                this.setState({
                    documents: res.data,
                    projects: null,
                })
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while getting projects info");
            })
    }

    _getElements() {
        if (this.state.projects) {
            return this.state.projects.map(project => <ProjectFile project = {project}
                                                                   handleClick = {this.showProjectDocuments} />);
        }

        return this.state.documents.map(document => <ProjectDocumentFile document = {document}
                                                                         getDocumentStructure = {this.props.getDocumentStructure} />);
    }

    render() {
        return (
            <div className = "project-file-system-container">
                {this._getElements()}
            </div>
        )
    }
}