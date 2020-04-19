import React, {Component} from "react";

import "./TemplateSearchHeader.css";
import WorkplaceSearch from "../../../search/WorkplaceSearch";

export default class TemplateSearchHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "template-search-header-outer-container">
                <div className = "template-search-options">
                    <div className = "template-search-option">
                        My templates
                    </div>
                    <div className = "template-search-option">
                        Search
                    </div>
                </div>
                <div className = "template-search-search-container">
                    <WorkplaceSearch backgroundColor = {"#e9e9e9"} />
                </div>
            </div>
        )
    }
}