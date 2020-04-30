import React, {Component} from "react";

import "./TemplateStructureHeader.css";

export default class TemplateStructureHeader extends Component { 
    constructor(props) { 
        super(props);
    }

    render() {
        return (
            <div className = "template-structure-header-container">
                <span className = "template-structure-header-template-name">
                    Template name: 
                </span>
                <span>
                    {this.props.headerText}
                </span>
                <button className = "template-structure-save-changes-btn"
                        onClick = {this.props.updateTemplateStructure}>
                    Save structure
                </button>
            </div>
        )
    }
}