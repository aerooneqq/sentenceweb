import React, {Component} from "react";

import "./TemplateSearch.css";
import TemplateSearchHeader from "./TemplateSearchHeader/TemplateSearchHeader";

export default class TemplateSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "template-search-outer-container">
                <TemplateSearchHeader />
            </div>
        )
    }
}