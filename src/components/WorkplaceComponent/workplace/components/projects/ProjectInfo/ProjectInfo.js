import React, {Component} from "react";

import "./ProjectInfo.css";

export default class ProjectInfo extends Component { 
    constructor(props) { 
        super(props);
    }

    render() {
        return (
            <div className = "project-full-info-container">
                {this.props.project ? this.props.project.name : null}
            </div>
        )
    }
}