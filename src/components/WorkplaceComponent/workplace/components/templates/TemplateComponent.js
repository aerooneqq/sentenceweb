import React, {Component} from "react";

import "./TemplateComponent.css";

import TemplateMenu from "./TemplateMenu/TemplateMenu";
import TemplateInfo from "./TemplateInfo/TemplateInfo";
import TemplatesService from "../../../../../services/TemplateService/TemplateService";
import ResponseService from "../../../../../services/ResponseService/ReponseService";
import TemplateStructure from "./TemplateStructure/TemplateStructure";


export default class TemplateComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTemplateID: null,
            selectedTemplate: null,
            mode: "My"
        }

        this.templateService = new TemplatesService(localStorage.getItem("token"));
        this.responseService = new ResponseService();
        this.changeSelectedTemplate = this.changeSelectedTemplate.bind(this);
    }

    changeSelectedTemplate(newSelectedTemplateID, currMode) { 
        this.templateService.getTemplateByID(newSelectedTemplateID)
            .then(res => {
                this.setState({
                    selectedTemplate: res.data,
                    mode: currMode
                });
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while getting template");
            })
    }

    render() {
        return (
            <div className = "templates-outer-container">
                <TemplateMenu changeSelectedTemplate = {this.changeSelectedTemplate}/>
                {this.state.selectedTemplate ? <TemplateInfo template = {this.state.selectedTemplate}
                                                             mode = {this.state.mode} /> : null}
                <div className = "template-structure-container">
                    {this.state.selectedTemplate ? <TemplateStructure template = {this.state.selectedTemplate}
                                                                      mode = {this.state.mode} /> : null}
                </div>
            </div>
        )
    }
}