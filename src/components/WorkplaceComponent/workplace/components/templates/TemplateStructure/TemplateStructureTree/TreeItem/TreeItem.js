import React, {Component} from "react";

import "./TreeItem.css";

//Icons
import addContentInsideIcon from "./img/add_content_inside.svg";
import addListInsideIcon from "./img/add_list_inside.svg"
import addContentIcon from "./img/add_content.svg";
import addListIcon from "./img/add_list.svg";
import deleteIcon from "./img/delete.svg";
import contentItemIcon from "./img/template_structure_content_paragraph_icon.svg";
import listItemIcon from "./img/template_structure_list_paragraph_icon.svg";
import commentIcon from "./img/comment_icon.svg";

import ContentEditableSpan from "../../../../../../../ContentEditable/ContentEditableSpan";
import TreeItemComment from "./TreeItemComment/TreeItemComment";


export default class TreeItem extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            isCommentShown: false,
        }

        this.handleAddContentItem = this.handleAddContentItem.bind(this);
        this.handleAddListItem = this.handleAddListItem.bind(this);
        this._handleAddInside = this._handleAddInside.bind(this);
        this.handleAddInsideContent = this.handleAddInsideContent.bind(this);
        this.handleAddInsideList = this.handleAddInsideList.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this._handleAddClick = this._handleAddClick.bind(this);
        this._getThisIndexInParent = this._getThisIndexInParent.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleShowComment = this.handleShowComment.bind(this);
    }

    _getThisIndexInParent() { 
        for (let i = 0; i < this.props.parentItem.items.length; ++i) {
            if (this.props.parentItem.items[i] === this.props.item) { 
                return i;
            }
        }

        return -1;
    }

    _handleAddClick(itemType) { 
        let index = this._getThisIndexInParent() + 1;

        this.props.parentItem.items.splice(index, 0, {
            name: "New item", 
            comment: "New comment here...", 
            itemType: itemType,
            items: [],
        });

        this.props.updateStructure();
    }

    handleAddContentItem() { 
        this._handleAddClick(1);
    }

    handleAddListItem() { 
        this._handleAddClick(0);
    }

    _handleAddInside(itemType) {
        this.props.item.items.unshift({
            name: "New item", 
            comment: "New comment here...", 
            itemType: itemType,
            items: [],
        });

        this.props.updateStructure();
    }

    handleAddInsideContent() { 
        this._handleAddInside(1);
    }

    handleAddInsideList() { 
        this._handleAddInside(0);
    }

    handleRemove() { 
        let index = this._getThisIndexInParent();
        if (index >= 0 && index < this.props.parentItem.items.length) { 
            this.props.parentItem.items.splice(index, 1);
            this.props.updateStructure();
        }
    }

    handleNameChange(newName) { 
        this.props.item.name = newName;
    }

    handleCommentChange(newComment) { 
        this.props.item.comment = newComment;
    }

    handleShowComment() { 
        this.setState(prevState => {
            return {
                isCommentShown: !prevState.isCommentShown
            }
        });
    }

    render() {
        return (
            <div className = "tree-item-outer-container">
                <div className = "tree-item-content">
                    <div>
                        <img src = {this.props.item.itemType === 0 ? listItemIcon : contentItemIcon} />
                    </div>
                    <ContentEditableSpan text = {this.props.item.name}
                                         marginLeft = {10}
                                         onChange = {this.handleNameChange}/>
                    <div className = "template-tree-item-icons">

                        <div className = "template-tree-item-add-content" onClick = {this.handleShowComment}>
                            <img src = {commentIcon} />
                        </div>
                        {this.props.parentItem ? (
                            <>
                                <div className = "template-tree-item-add-content" onClick = {this.handleAddContentItem}>
                                    <img src = {addContentIcon} />
                                </div>
                                <div className = "template-tree-item-add-list" onClick = {this.handleAddListItem}>
                                    <img src = {addListIcon} />
                                </div>
                            </>
                        ) : null}
                        {this.props.item.itemType === 0 || this.props.item.itemType === 2 ? (
                            <>
                                <div className = "template-tree-item-add-inside-content" onClick = {this.handleAddInsideContent}>
                                    <img src = {addContentInsideIcon} />
                                </div>
                                <div className = "template-tree-item-add-inside-list" onClick = {this.handleAddInsideList}>
                                    <img src = {addListInsideIcon} />
                                </div>
                            </>
                        ) : null }

                        {this.props.parentItem ? (
                            <div className = "template-tree-item-remove" onClick = {this.handleRemove}>
                                <img src = {deleteIcon} />
                            </div>
                        ) : null}

                    </div>
                </div>
                <div className = {this.state.isCommentShown ? "tree-item-comment-visible" : "tree-item-comment-invisible"}>
                    <TreeItemComment comment = {this.props.item.comment}
                                     handleCommentChange = {this.handleCommentChange} />
                </div>
                <div className = "tree-item-children-container">
                    {this.props.item.items ? this.props.item.items.map(
                        item => <TreeItem item = {item}
                                          parentItem = {this.props.item} 
                                          updateStructure = {this.props.updateStructure}/>) : null}
                </div>
            </div>
        )
    }
}