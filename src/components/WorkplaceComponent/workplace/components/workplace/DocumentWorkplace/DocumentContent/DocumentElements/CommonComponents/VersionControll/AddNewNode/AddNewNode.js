import React, {Component} from "react";

import "./AddNewNode.css";
import { showInputMessageBox } from "../../../../../../../../../../MessageInputBox/MessageInputBoxManager";

import addNewNode from "./img/add_new_node.svg";

export default class AddNewNode extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        showInputMessageBox("Enter name for new node", [{title: "Name"}, {title: "Comment"}], 
            (userValues) => {
                this.props.createNewNode(userValues["Name"], userValues["Comment"]);
            }, () => {}
        ); 
    }

    render() {
        return (
            <div className = "add-new-node-container" onClick = {this.handleClick}>
                <img className = "add-new-node-icon" src = {addNewNode} />
            </div>
        )
    }
}