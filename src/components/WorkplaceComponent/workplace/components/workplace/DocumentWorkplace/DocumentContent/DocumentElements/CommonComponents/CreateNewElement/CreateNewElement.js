import React, {Component} from "react";

//Styles
import "./CreateNewElement.css";

import addIcon from "./img/create_new_element.svg";

export default class CreateNewElement extends Component {
    constructor(props) {
        super(props);

        this.state = {}

        this.handleCreateImageClick = this.handleCreateImageClick.bind(this);
        this.handleCreateListClick = this.handleCreateListClick.bind(this);
        this.handleCreateTableClick = this.handleCreateTableClick.bind(this);
        this.handleCreateParagraphClick = this.handleCreateParagraphClick.bind(this);
    }

    handleCreateParagraphClick() {
        this.props.createNewElement(0, this.props.index);
    }

    handleCreateImageClick() {
        this.props.createNewElement(1, this.props.index);
    }

    handleCreateTableClick() {
        this.props.createNewElement(2, this.props.index);
    }

    handleCreateListClick() {
        this.props.createNewElement(3, this.props.index);
    }

    render() {
        return (
            <div className = "create-new-element-outer-cont">
                <img className = "create-new-element-icon" src = {addIcon} />
                <div className = "create-new-element-text" onClick = {this.handleCreateParagraphClick}>Paragraph</div>
                <div className = "create-new-element-text" onClick = {this.handleCreateImageClick}>Image</div>
                <div className = "create-new-element-text" onClick = {this.handleCreateListClick}>List</div>
                <div className = "create-new-element-text" onClick = {this.handleCreateTableClick}>Table</div>
            </div>
        )
    }
}