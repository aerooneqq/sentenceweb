import React, {Component} from "react";

import "./TemplateStructureHeader.css";

export default class TemplateStructureHeader extends Component { 
    constructor(props) { 
        super(props);
    }

    render() {
        return (
            <div className = "template-structure-header-container">
                <span>
                    {this.props.headerText}
                </span>
                <button onClick = {this.props.updateTemplateStructure}>
                    Save structure
                </button>
            </div>
        )
    }
}