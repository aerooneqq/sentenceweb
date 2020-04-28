import React, {Component} from "react";

import "./TemplateTextInfo.css";

import TemplateInfoTextBox from "./TemplateTextInfoTextBox/TemplateTextInfoTextBox";
import TemplateTextInfoStaticTextBox from "./TemplateTextInfoStaticTextBox/TemplateTextInfoStaticTextBox";
import SaveChangeInTemplate from "./SaveChangeInTemplate/SaveChangeInTemplate";
import PublishTemplateBtn from "./PublishTemplateBtn/PublishTemplateBtn";
import DeleteTemplateBtn from "./DeleteTemplateBtn/DeleteTemplateBtn";
import RemoveFromPublicBtn from "./RemoveFromPublicBtn/RemoveFromPublicBtn";


export default class TemplateTextInfo extends Component {
    constructor(props) {
        super(props);

        this.values = {
            name: this.props.template.name,
            description: this.props.template.description,
            organization: this.props.template.organizationName,
        }
        console.log("TEMPLATE:");
        console.log(props.template);

        this.handlePropertyName = this.handlePropertyName.bind(this);
        this.handlePublishTemplate = this.handlePublishTemplate.bind(this);
        this.handleDeleteTemplate = this.handleDeleteTemplate.bind(this);
        this.handleRemovePublicTemplate = this.handleRemovePublicTemplate.bind(this);
        this.handleSaveBtnClick = this.handleSaveBtnClick.bind(this);
    }

    handlePropertyName(propertyName, newValue) {
        this.values[propertyName] = newValue;
    }

    handleSaveBtnClick() {
        this.props.updateTemplateProperties(this.props.template.id, this.values);
    }

    handlePublishTemplate() {
        this.props.publishTemplate(this.props.template.id);
    }

    handleDeleteTemplate() {
        this.props.deleteTemplate(this.props.template.id);
    }

    handleRemovePublicTemplate() {
        this.props.removeTemplateFromPublic(this.props.template.id);
    }

    render() {
        return (
            <div className = "template-text-info-outer-container">
                <div className = "template-text-info-author-username-container">
                    <span className = "template-text-info-property-description">
                        Author: 
                    </span>
                    <span className = "template-text-info-author-username">
                        {this.props.template.author.username}
                    </span>
                </div>
                <div className = "template-text-info-property">
                    <span className = "template-text-info-property-description">
                        Template name:
                    </span>
                    <TemplateInfoTextBox propertyName = "name" handlePropertyChange = {this.handlePropertyName}
                                         value = {this.props.template.name ? this.props.template.name : "Not listed"}
                                         mode = {this.props.mode} />
                </div>
                <div className = "template-text-info-property">
                    <span className = "template-text-info-property-description">
                        Description:
                    </span>
                    <TemplateInfoTextBox propertyName = "description" handlePropertyChange = {this.handlePropertyName}
                                         value = {this.props.template.description ? this.props.template.description : "Not listed"}
                                         mode = {this.props.mode} />
                </div>
                <div className = "template-text-info-property">
                    <span className = "template-text-info-property-description">
                        Organization:
                    </span>
                    <TemplateInfoTextBox propertyName = "organization" handlePropertyChange = {this.handlePropertyName}
                                         value = {this.props.template.organization ? this.props.template.organization: "Not listed"}
                                         mode = {this.props.mode} />
                </div>
                <div className = "template-text-info-property">
                    <span className = "template-text-info-property-description">
                        Created at:
                    </span>
                    <TemplateTextInfoStaticTextBox value = {this.props.template.createdAt.substr(0, 10)} />
                </div>
                <div className = "template-text-info-property">
                    <span className = "template-text-info-property-description">
                        Updated at:
                    </span>
                    <TemplateTextInfoStaticTextBox value = {this.props.template.updatedAt.substr(0, 10)} />
                </div>
                {this.props.mode === "My" ? (
                    <>
                        <SaveChangeInTemplate handleSaveBtnClick = {this.handleSaveBtnClick}/>
                        <div className = "template-info-danger-zone-container">
                            <span className = "template-info-danger-zone-text">
                                Danger zone
                            </span>
                            {this.props.template.published === false ? 
                                <PublishTemplateBtn publishTemplate = {this.handlePublishTemplate}/>
                                : <RemoveFromPublicBtn removePublicTemplate = {this.handleRemovePublicTemplate}/>}
                            <DeleteTemplateBtn deleteTemplate = {this.handleDeleteTemplate}/>
                        </div>
                    </>
                ) : null}
            </div>
        )
    }
}