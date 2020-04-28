import React, {Component} from "react";

import "./TemplateTextInfoStaticTextBox.css";

export default class TemplateTextInfoStaticTextBox extends Component {
    constructor(props) { 
        super(props);
    }

    render() {
        return (
            <div className = "template-info-static-text-box">
                {this.props.value}
            </div>
        )
    }
}