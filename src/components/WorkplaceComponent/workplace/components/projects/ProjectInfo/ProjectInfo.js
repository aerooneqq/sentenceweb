import React, {Component} from "react";

import "./ProjectInfo.css";
import ProjectInfoHeader from "./ProjectInfoHeader/ProjectInfoHeader";
import ProjectInfoDetails from "./ProjectInfoDetails/ProjectInfoDetails";

export default class ProjectInfo extends Component { 
    constructor(props) { 
        super(props);

        this.project = props.project;
    }

    render() {
        return (
            <div className = "project-full-info-container">
                {this.props.project ? (
                    <>
                        <ProjectInfoHeader project = {this.props.project} />
                        <ProjectInfoDetails project = {this.props.project} />
                    </>
                ) : null }
            </div>
        )
    }
}