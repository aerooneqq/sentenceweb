import React, {Component} from "react";

import "./CreateNewBranch.css";


export default class CreateNewBranch extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.createNewBranch("New branch name");
    }

    render() {
        return (
            <div className = "create-new-branch-container" onClick = {this.handleClick}>
                Create new
            </div>
        )
    }
}