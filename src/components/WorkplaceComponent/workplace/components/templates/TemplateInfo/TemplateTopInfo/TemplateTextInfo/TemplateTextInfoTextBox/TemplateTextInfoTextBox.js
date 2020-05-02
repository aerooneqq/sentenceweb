import React, {Component} from "react";

import "./TemplateTextInfoTextBox.css";
import ContentEditableSpan from "../../../../../../../../ContentEditable/ContentEditableSpan"

export default class TemplateInfoTextBox extends Component {
    constructor(props) {
        super(props);

        this.handlePropertyChange = this.handlePropertyChange.bind(this);
    }

    handlePropertyChange(newText) {
        this.props.handlePropertyChange(this.props.propertyName, newText);
    }

    render() {
        return (
            <div className = "template-info-text-box">
                <ContentEditableSpan onChange = {this.handlePropertyChange}
                                     text = {this.props.value}
                                     editable = {this.props.mode === "My"} />
            </div>
        )
    }
}