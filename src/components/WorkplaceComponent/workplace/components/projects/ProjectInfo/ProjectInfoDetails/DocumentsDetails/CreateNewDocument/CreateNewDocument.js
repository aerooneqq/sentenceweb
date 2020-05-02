import React, {Component} from "react";

import "./CreateNewDocument.css";

import createIcon from "./img/invite_new_participant.svg";
import WorkplaceSearch from "../../../../../search/WorkplaceSearch";

import Template from "../../../../../templates/TemplatesList/Template/Template"
import TemplatesService from "../../../../../../../../../services/TemplateService/TemplateService";
import ResponseService from "../../../../../../../../../services/ResponseService/ReponseService";
import ProjectService from "../../../../../../../../../services/Projects/ProjectService";
import { alertAppMessage } from "../../../../../../../../ApplicationMessage/ApplicationMessageManager";

export default class CreateNewDocument extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFormOpen: false,
            foundTemplates: [],
            selectedTemplate: null,
        }

        this.templateService = new TemplatesService(localStorage.getItem("token"));
        this.projectService = new ProjectService(localStorage.getItem("token"));
        this.responseService = new ResponseService();

        this.changeOpenStatusOfCreationForm = this.changeOpenStatusOfCreationForm.bind(this);
        this.searchForTemplates = this.searchForTemplates.bind(this);
        this.handleDocumentNameChange = this.handleDocumentNameChange.bind(this);
        this.createNewDocument = this.createNewDocument.bind(this);
    }

    changeOpenStatusOfCreationForm() {
        this.setState(prevState => {
            return {
                isFormOpen: !prevState.isFormOpen,
            }
        });
    }

    searchForTemplates(query) {
        this.templateService.searchForPublicTemplates(query)
            .then(res => {
                this.setState({
                    foundTemplates: res.data
                });
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while searching for template");
            })
    }

    handleDocumentNameChange(event) {
        this.setState({
            documentName: event.target.value
        });
    }

    createNewDocument() {
        this.projectService.createNewDocumentInProject(this.props.project.id, this.state.documentName,
                                                       this.state.selectedTemplate.id)
            .then(res => {
                alertAppMessage("The document was created", "success");
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while creating document");
            })
    }

    render() {
        return (
            <div className = {!this.state.isFormOpen ? "create-new-document-outer-container-closed" 
                            : "create-new-document-outer-container-opened"}>
                {this.state.isFormOpen === false ? (
                    <img className = "invite-new-participant-icon" src = {createIcon}  
                         onClick = {this.changeOpenStatusOfCreationForm}/>
                ) : (
                    <div className = "create-new-document-form">
                        <span className = "create-new-document-input-description">
                            Enter document name
                        </span>
                        <input className = "create-new-document-input" value = {this.state.documentName}
                               onChange = {this.handleDocumentNameChange} />
                        <span className = "create-new-document-input-description">
                            Search for template
                        </span>
                        <div className = "create-new-document-search-for-templates">
                            <WorkplaceSearch search = {this.searchForTemplates} />
                        </div>
                        <div className = "create-new-document-templates">
                            {this.state.foundTemplates.map(template => {
                                let handleTemplateClick = () => {
                                    this.setState({
                                        selectedTemplate: template
                                    });
                                }

                                return (
                                    <div onClick = {handleTemplateClick}>
                                        <Template template = {template} />
                                    </div>
                                )
                            })}
                        </div>
                        <span className = "create-new-document-input-description">
                            Selected template: {this.state.selectedTemplate ? this.state.selectedTemplate.name : null}
                        </span>
                        <button className = "create-new-document-btn" onClick = {this.createNewDocument}>
                            Create document
                        </button>
                        <div className = "create-new-document-close"
                             onClick = {this.changeOpenStatusOfCreationForm}>
                            Close
                        </div>
                    </div>
                )}
            </div>
        )
    }
}