import React, {Component} from "react";

import "./TemplateMenu.css";
import PublishedTemplates from "../PublishedTemplates/PublishedTemplates";
import TemplateSearch from "../TemplateSearch/TemplateSearch";
import MyTemplates from "../MyTemplates/MyTemplates";
import TemplatesService from "../../../../../../services/TemplateService/TemplateService";
import { alertAppMessage } from "../../../../../ApplicationMessage/ApplicationMessageManager";

export default class TemplateMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: "My",
            templates: [],
        }

        this.templatesService = new TemplatesService(localStorage.getItem("token"));

        this.changeMode = this.changeMode.bind(this);
        this._getPublishedTemplates = this._getPublishedTemplates.bind(this);
        this._getUserTemplates = this._getUserTemplates.bind(this);
        this.searchForTemplates = this.searchForTemplates.bind(this);
        this.updateTemplates = this.updateTemplates.bind(this);
        this.changeSelectedTemplate = this.changeSelectedTemplate.bind(this);
    }

    componentDidMount() {
        this._getUserTemplates();
    }

    _getUserTemplates() {
        this.templatesService.getUserTemplates()
            .then(res => {
                this.setState({
                    templates: res.data
                });
            })
            .catch(er => {
                if (er.response) {
                    alertAppMessage(er.response.data);
                }
                else {
                    alertAppMessage("Error ocurred while getting user templates");
                }
            });
    }

    _getPublishedTemplates() {
        this.templatesService.getPublishedTemplates()
            .then(res => {
                this.setState({
                    templates: res.data
                });
            })
            .catch(er => {
                if (er.response) {
                    alertAppMessage(er.response.data);
                }
                else {
                    alertAppMessage("Error ocurred while getting user templates");
                }
            });
    }

    changeMode(newMode) { 
        this.setState({
            mode: newMode,
        }, () => {
            this.updateTemplates();
        });
    }
    
    updateTemplates() {
        if (this.state.mode == "My") {
            this._getUserTemplates();
        }
        else {
            this._getPublishedTemplates();
        }
    }

    searchForTemplates(query) {
        if (this.state.mode == "My") {
            this.templatesService.searchForUserTemplates(query)
                .then(res => {
                    this.setState({
                        templates: res.data
                    });
                })
                .catch(er => {
                    if (er.response) {
                        alertAppMessage(er.response.data);
                    }
                    else {
                        alertAppMessage("Error ocurred while searching for templates");
                    }
                });
        }
        else {
            this.templatesService.searchForUserTemplates(query)
                .then(res => {
                    this.setState({
                        templates: res.data
                    });
                })
                .catch(er => {
                    if (er.response) {
                        alertAppMessage(er.response.data);
                    }
                    else {
                        alertAppMessage("Error ocurred while searching for templates");
                    }
                });
        }
    }

    changeSelectedTemplate(templateID) {
        this.props.changeSelectedTemplate(templateID, this.state.mode);
    }

    render() {
        return (
            <div>
                <TemplateSearch changeMode = {this.changeMode}
                                search = {this.searchForTemplates} />
                {this.state.mode === "My" ? <MyTemplates templates = {this.state.templates}
                                                         updateTemplates = {this.updateTemplates}
                                                         changeSelectedTemplate = {this.changeSelectedTemplate} /> : 
                                            <PublishedTemplates templates = {this.state.templates}
                                                                changeSelectedTemplate = {this.changeSelectedTemplate} />}
            </div>
        )
    }
}