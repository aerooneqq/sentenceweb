import React, {Component} from "react";

import "./SaveChangeInTemplate.css";

export default class SaveChangeInTemplate extends Component {
    constructor(props) { 
        super(props);
    }

    render() {
        return (
            <button className = "save-change-in-template-info-btn"
                    onClick = {this.props.handleSaveBtnClick}>
                Save
            </button>
        )
    }
}