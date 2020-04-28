import React, {Component} from "react";

import "./TemplateInfo.css";
import TemplateTopInfo from "./TemplateTopInfo/TempateTopInfo";
import { alertAppMessage } from "../../../../../ApplicationMessage/ApplicationMessageManager";
import TemplatesService from "../../../../../../services/TemplateService/TemplateService";
import ResponseService from "../../../../../../services/ResponseService/ReponseService";

export default class TemplateInfo extends Component {
    constructor(props) { 
        super(props);

        this.state = {
            template: props.template,
        }

        this.templateService = new TemplatesService(localStorage.getItem("token"));
        this.responseService = new ResponseService();
        this.deleteTemplate = this.deleteTemplate.bind(this);
        this.publishTemplate = this.publishTemplate.bind(this);
        this.removeTemplateFromPublic = this.removeTemplateFromPublic.bind(this);
        this.updateTemplatePhoto = this.updateTemplatePhoto.bind(this);
        this.updateTemplateProperties = this.updateTemplateProperties.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.template.id != prevState.template.id) {
            console.log("getDerivedStateFromProps")
            console.log(nextProps.template);
            console.log(prevState.template);
            return {
                template: nextProps.template,
            }
        }
    }

    deleteTemplate(templateID) { 
        this.templateService.deleteTemplate(templateID)
            .then(res => {
                alertAppMessage("Template was deleted", "success");
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while deleting template")
            })
    }

    publishTemplate(templateID) {
        this.templateService.publishTemplate(templateID)
            .then(res => {
                alertAppMessage("Template was published", "success");
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while publishing template");
            })
    }

    removeTemplateFromPublic(templateID) {
        this.templateService.removeTemplateFromPublic(templateID)
            .then(res => {
                alertAppMessage("Template was removed from public", "success");
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while removing template from public");
            })
    }
    
    updateTemplatePhoto(templateID, newPhoto) {
        this.templateService.updateTemplatePhoto(templateID, newPhoto)
            .then(res => {
                this.setState({
                    template: res.data
                }, () => {
                    alertAppMessage("Template was removed from public", "success");
                })
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while updating template's photo");
            })
    }

    updateTemplateProperties(templateID, values) {
        this.templateService.updateTemplateProperties(templateID, values.name, 
                values.organizationName, values.description)
            .then(res => {
                this.setState({
                    template: res.data
                }, () => {
                    alertAppMessage("The template was updated", "success");
                })
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while updating templates properties");
            })
    }

    render() {
        return (
            <div className = "template-info-outer-container">
                <TemplateTopInfo template = {this.state.template}
                                 mode = {this.props.mode} 
                                 deleteTemplate = {this.deleteTemplate}
                                 publishTemplate = {this.publishTemplate}
                                 removeTemplateFromPublic = {this.removeTemplateFromPublic}
                                 updateTemplatePhoto = {this.updateTemplatePhoto}
                                 updateTemplateProperties = {this.updateTemplateProperties}/>
            </div>
        )
    }
}