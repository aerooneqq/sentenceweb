import React, {Component} from "react";

import "./RemoveFromPublicBtn.css";
import removePublicTemplate from "./img/remove_template_from_public.svg";

export default class RemoveFromPublicBtn extends Component {
    constructor(props) { 
        super(props);
    }

    render() {
        return (
            <button className = "remove-public-template-btn"
                    onClick = {this.props.removePublicTemplate}>
                <img className = "remove-public-template-btn-icon" src = {removePublicTemplate} />
                <span className = "remove-public-template-btn-text">
                    Remove
                </span>
            </button>
        )
    }
}