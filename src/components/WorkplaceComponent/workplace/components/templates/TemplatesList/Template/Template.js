import React, {Component} from "react";

import "./Template.css";

import defaultTemplatePhoto from "./img/default_template_photo.svg";
import publishedTemplateIcon from "./img/published_template_icon.svg";
import privateTemplateIcon from "./img/private_template_icon.svg";

export default class Template extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "template-list-item-container">
                <div className = "template-list-item-picture-container">
                    <img src = {this.props.template.logo ? "data:image/png;base64," + this.props.template.logo : defaultTemplatePhoto} 
                         className = {this.props.template.logo ? "template-list-item-picture-exists" : "template-list-item-picture-doesnt-exist"} />
                </div>
                <div className = "template-list-item-desc">
                    <div className = "template-list-item-desc-top">
                        <span className = "template-list-item-name">
                            {this.props.template.name} 
                        </span>
                        <img src = {this.props.template.published ? publishedTemplateIcon : privateTemplateIcon}
                             className = "template-list-item-publish-status-icon" />
                        <div className = "fill-container" />
                        <div className = "template-list-item-usage-count">
                            {this.props.template.documentCount ? this.props.template.documentCount : 0}
                        </div>
                    </div>
                    <div className = "template-list-item-desc-bottom">
                        <div className = "template-list-item-author">
                            by {this.props.template.author.username} ({this.props.template.createdAt.substr(0, 10)})
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}