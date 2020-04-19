import React, { Component } from "react";

import "./NumberedList.css";
import ContentEditableDiv from "../CommonComponents/ContentEditable/ContentEditableSpan";

//Icons
import addInsideIcon from "./img/add_inside.svg";
import addIcon from "./img/add.svg";
import deleteIcon from "./img/delete.svg";

export default class NumberedListElement extends Component {
    constructor(props) {
        super(props);

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleAddInside = this.handleAddInside.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEditableChange = this.handleEditableChange.bind(this);
    }

    handleEditableChange(text) {
        this.props.changeCurrentElement(text)
    }

    handleAddClick() {
        this.props.addElement(this.props.index);
    }

    handleAddInside() {
        this.props.insertInside();
    }

    handleRemove() {
        this.props.deleteElement(this.props.index);
    }   

    render() {
        return (
            <div className = "numbered-list-element" 
                 style = {{"margin-left": (25 + this.props.level * 30) + "px"}}>
                <div className = "numbered-list-element-num">
                    {this.props.index + 1}.
                </div>
                <ContentEditableDiv text = {this.props.element.content} 
                                    color = {"black"}
                                    fontSize = {"18px"}
                                    marginTop = {-2}
                                    maxWidth = {300}
                                    onChange = {this.handleEditableChange}/>
                <div className = "numbered-list-element-icons">
                    <div className = "numbered-list-element-add" onClick = {this.handleAddClick}>
                        <img src = {addIcon} />
                    </div>
                    <div className = "numbered-list-element-add-inside" onClick = {this.handleAddInside}>
                        <img src = {addInsideIcon} />
                    </div>
                    <div className = "numbered-list-element-remove" onClick = {this.handleRemove}>
                        <img src = {deleteIcon} />
                    </div>
                </div>
            </div>
        )
    }
}