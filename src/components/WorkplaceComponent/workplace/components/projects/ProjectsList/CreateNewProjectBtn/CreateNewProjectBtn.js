import React, {Component} from "react";

import "./CreateNewProjectBtn.css";

export default class CreateNewProjectBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className = "create-new-project-button"
                    onClick = {this.props.createNewProject}>
                Create new project
            </button>
        )
    }
}