import React, {Component} from "react";

import "./TemplateList.css"; 
import Template from "./Template/Template";

export default class TemplateList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.templates ? this.props.templates.map(template => {
                let handleTemplateClick = () => {
                    this.props.changeSelectedTemplate(template.id);
                }

                return (                
                    <div onClick = {handleTemplateClick}>
                        <Template templateID = {template.templateID} logo = {template.logo} name = {template.name}
                                  documentsCount = {template.documentsCount}
                                  author = {template.author}
                                  createdAt = {template.createdAt}
                                  published = {template.published} />
                    </div>)
            }) : null
        )
    }
}