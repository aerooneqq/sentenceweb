import React, {Component} from "react";

import "./AdminControlElement.css";

export default class AdminControlElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "admin-control-element-container"
                 onClick = {this.props.handleClick}>
                <img className = "admin-control-element-icon" src = {this.props.icon} />
            </div>
        )
    }
}