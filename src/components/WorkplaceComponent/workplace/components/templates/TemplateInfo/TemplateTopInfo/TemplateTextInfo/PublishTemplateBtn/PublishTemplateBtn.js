import React, {Component} from "react";

import "./PublishTemplateBtn.css";

import publishTemplateIcon from "./img/publish_template_icon.svg";

export default class PublishTemplateBtn extends Component { 
    constructor(props) { 
        super(props);
    }

    render() {
        return (
            <button className = "publish-template-btn"
                    onClick = {this.props.publishTemplate}>
                <img className = "publish-template-btn-icon" src = {publishTemplateIcon} />
                <span className = "publish-template-btn-text">
                    Publish
                </span>
            </button>
        )
    }
}