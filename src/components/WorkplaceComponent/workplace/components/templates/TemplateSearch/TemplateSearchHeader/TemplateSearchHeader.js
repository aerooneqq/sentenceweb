import React, {Component} from "react";

import "./TemplateSearchHeader.css";
import WorkplaceSearch from "../../../search/WorkplaceSearch";

export default class TemplateSearchHeader extends Component {
    constructor(props) {
        super(props);

        this.handleMyTemplatesClick = this.handleMyTemplatesClick.bind(this);
        this.handlePublishedTemplatesClick = this.handlePublishedTemplatesClick.bind(this);
    }

    handleMyTemplatesClick(e) {
        this.props.changeMode("My");
    }

    handlePublishedTemplatesClick(e) {
        this.props.changeMode("Published");
    }

    render() {
        return (
            <div className = "template-search-header-outer-container">
                <div className = "template-search-options">
                    <div className = "template-search-option" onClick = {this.handleMyTemplatesClick}>
                        My templates
                    </div>
                    <div className = "template-search-option" onClick = {this.handlePublishedTemplatesClick}>
                        Published
                    </div>
                </div>
                <div className = "template-search-search-container">
                    <WorkplaceSearch backgroundColor = "#e9e9e9"
                                     search = {this.props.search} />
                </div>
            </div>
        )
    }
}