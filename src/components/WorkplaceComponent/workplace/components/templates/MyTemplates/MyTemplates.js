import React, {Component} from "react";

import "./MyTemplates.css";

import createNewTemplate from "./img/create_new_template.svg"

import TemplateList from "../TemplatesList/TemplateList";
import TemplatesService from "../../../../../../services/TemplateService/TemplateService";
import { showInputMessageBox } from "../../../../../MessageInputBox/MessageInputBoxManager";
import { alertAppMessage } from "../../../../../ApplicationMessage/ApplicationMessageManager";



export default class MyTemplates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            templates: []
        }

        this.templatesService = new TemplatesService(localStorage.getItem("token"));

        this.createNewTemplate = this.createNewTemplate.bind(this);
    }

    createNewTemplate() {
        showInputMessageBox("Enter template params", [{title: "Name"}, {title: "Organization"}, {title: "Desc"}],
            (data) => {
                this.templatesService.createNewTemplate(data["Name"], data["Organization"], data["Desc"])
                    .then(res => {
                        alertAppMessage("Template was created", "success");
                        this.props.updateTemplates();
                    })
                    .catch(er => {
                        if (er.response) {
                            alertAppMessage(er.response.data);
                        }
                        else {
                            alertAppMessage("Error ocurred while getting user templates");
                        }
                    })
            }, 
            () => {});
    }

    render() {
        return (
            <div className = "my-templates-container">
                <div className = "create-new-my-template" onClick = {this.createNewTemplate}>
                    <img className = "create-new-my-template-icon" src = {createNewTemplate} />
                    <div className = "create-new-my-template-text">
                        Create
                    </div>
                </div>
                <TemplateList templates = {this.props.templates}
                              changeSelectedTemplate = {this.props.changeSelectedTemplate}/>
            </div>
        )
    }
}