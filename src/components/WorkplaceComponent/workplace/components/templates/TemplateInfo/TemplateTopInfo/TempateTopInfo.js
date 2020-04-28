import React, {Component} from "react";

import "./TemplateTopInfo.css";
import TemplateTopInfoPhoto from "./TemplateTopInfoPhoto/TemplateTopInfoPhoto";
import TemplateTextInfo from "./TemplateTextInfo/TemplateTextInfo";

export default class TemplateTopInfo extends Component {
    constructor(props) {
        super(props);

        this.updateTemplatePhoto = this.updateTemplatePhoto.bind(this);
    }

    updateTemplatePhoto(newPhotoBytes) {
        this.props.updateTemplatePhoto(this.props.template.id, newPhotoBytes);
    }

    render() {
        console.log(this.props.template);
        return (
            <div className = "template-top-info-outer-cont">
                <div className = "template-top-info-photo">
                    <TemplateTopInfoPhoto photo = {this.props.template.logo}
                                          updateTemplatePhoto = {this.updateTemplatePhoto} />
                </div>
                <TemplateTextInfo template = {this.props.template}
                                  mode = {this.props.mode}
                                  deleteTemplate = {this.props.deleteTemplate}
                                  publishTemplate = {this.props.publishTemplate}
                                  removeTemplateFromPublic = {this.props.removeTemplateFromPublic}
                                  updateTemplateProperties = {this.props.updateTemplateProperties} />
            </div>
        )

    }
}