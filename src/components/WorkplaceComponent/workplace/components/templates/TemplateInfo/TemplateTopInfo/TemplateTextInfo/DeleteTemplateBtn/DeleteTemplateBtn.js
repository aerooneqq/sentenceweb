import React, {Component} from "react";

import "./DeleteTemplateBtn.css";
import deleteTemplateIcon from "./img/delete_template_icon.svg";

export default class DeleteTemplateBtn extends Component { 
    constructor(props) { 
        super(props);
    }

    render() {
        return (
            <button className = "template-info-delete-btn"
                    onClick = {this.props.deleteTemplate}>
                <img src = {deleteTemplateIcon} />
                <span className = "template-info-delete-btn-text">
                    Delete
                </span>
            </button>
        )
    }
}