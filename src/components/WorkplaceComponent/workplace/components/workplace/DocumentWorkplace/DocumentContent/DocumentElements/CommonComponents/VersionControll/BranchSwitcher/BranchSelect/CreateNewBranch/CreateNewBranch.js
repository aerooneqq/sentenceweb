import React, {Component} from "react";

import "./CreateNewBranch.css";
import { showInputMessageBox } from "../../../../../../../../../../../../MessageInputBox/MessageInputBoxManager";


export default class CreateNewBranch extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        showInputMessageBox("Enter name for new branch", [{title: "Name"}], 
            (values) => {
                this.props.createNewBranch(values["Name"]);
            }, () => {});
    }

    render() {
        return (
            <div className = "create-new-branch-container" onClick = {this.handleClick}>
                Create new
            </div>
        )
    }
}