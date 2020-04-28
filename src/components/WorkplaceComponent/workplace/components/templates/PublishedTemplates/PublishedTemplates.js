import React, {Component} from "react";

import "./PublishedTemplates.css";
import TemplateList from "../TemplatesList/TemplateList";

export default class PublishedTemplates extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "my-templates-container">
                <TemplateList templates = {this.props.templates}
                              changeSelectedTemplate = {this.props.changeSelectedTemplate}/>
            </div>
        )
    }
}