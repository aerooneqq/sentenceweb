import React, {Component} from "react";

import "./TemplateTextInfoTextBox.css";
import ContentEditableDiv from "../../../../../workplace/DocumentWorkplace/DocumentContent/DocumentElements/CommonComponents/ContentEditable/ContentEditableSpan";

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
                <ContentEditableDiv onChange = {this.handlePropertyChange}
                                    text = {this.props.value}
                                    editable = {this.props.mode === "My"} />
            </div>
        )
    }
}