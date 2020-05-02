import React, {Component} from "react";

import "./HeaderElement.css";

export default class HeaderElement extends Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "profile-details-header-element"
                 onClick = {this.props.handleElementClick}>
                {this.props.name}
            </div>
        )
    }
}