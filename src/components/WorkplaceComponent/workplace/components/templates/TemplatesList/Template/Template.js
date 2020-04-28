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
                    <img src = {this.props.logo ? "data:image/png;base64," + this.props.logo : defaultTemplatePhoto} 
                         className = {this.props.logo ? "template-list-item-picture-exists" : "template-list-item-picture-doesnt-exist"} />
                </div>
                <div className = "template-list-item-desc">
                    <div className = "template-list-item-desc-top">
                        <span className = "template-list-item-name">
                            {this.props.name} 
                        </span>
                        <img src = {this.props.published ? publishedTemplateIcon : privateTemplateIcon}
                             className = "template-list-item-publish-status-icon" />
                        <div className = "fill-container" />
                        <div className = "template-list-item-usage-count">
                            {this.props.documentsCount ? this.props.documentsCount: 0}
                        </div>
                    </div>
                    <div className = "template-list-item-desc-bottom">
                        <div className = "template-list-item-author">
                            by {this.props.author.username} ({this.props.createdAt.substr(0, 10)})
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}