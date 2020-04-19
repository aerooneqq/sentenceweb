import React, {Component} from "react";


import "./TemplateComponent.css";
import TemplateSearch from "./TemplateSearch/TemplateSearch";


export default class TemplateComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "templates-outer-container">
                <TemplateSearch />
            </div>
        )
    }
}