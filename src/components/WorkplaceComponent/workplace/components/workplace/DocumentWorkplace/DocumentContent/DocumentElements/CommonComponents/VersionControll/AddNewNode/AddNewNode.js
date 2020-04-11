import React, {Component} from "react";

import "./AddNewNode.css";


export default class AddNewNode extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.createNewNode();
    }

    render() {
        return (
            <div className = "add-new-node-container" onClick = {this.handleClick}>

            </div>
        )
    }
}