import React, {Component} from "react";

import "./TreeItem.css";

//Icons
import addInsideIcon from "./img/add_inside.svg";
import addIcon from "./img/add.svg";
import deleteIcon from "./img/delete.svg";
import contentItemIcon from "./img/template_structure_content_paragraph_icon.svg";
import listItemIcon from "./img/template_structure_list_paragraph_icon.svg";

import ContentEditableDiv from "../../../../workplace/DocumentWorkplace/DocumentContent/DocumentElements/CommonComponents/ContentEditable/ContentEditableSpan";


export default class TreeItem extends Component { 
    constructor(props) {
        super(props);

        this.handleAddContentItem = this.handleAddContentItem.bind(this);
        this.handleAddListItem = this.handleAddListItem.bind(this);
        this._handleAddInside = this._handleAddInside.bind(this);
        this.handleAddInsideContent = this.handleAddInsideContent.bind(this);
        this.handleAddInsideList = this.handleAddInsideList.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this._handleAddClick = this._handleAddClick.bind(this);
        this._getThisIndexInParent = this._getThisIndexInParent.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
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
            type: itemType,
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

    _handleAddInside() {
        this.props.item.items.unshift({
            name: "New item", 
            comment: "New comment here...", 
            type: 1,
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

    render() {
        return (
            <div className = "tree-item-outer-container">
                <div className = "tree-item-content">
                    <img src = {this.props.item.itemType === 0 ? listItemIcon : contentItemIcon} />
                    <div className = "tree-item-content-text">
                        <ContentEditableDiv text = {this.props.item.name}
                                            onChange = {this.handleNameChange}/>
                    </div>
                    <div className = "template-tree-item-icons">
                        {this.props.parentItem ? (
                            <>
                            <div className = "template-tree-item-add-content" onClick = {this.handleAddContentItem}>
                                <img src = {addIcon} />
                            </div>
                            <div className = "template-tree-item-add-list" onClick = {this.handleAddListItem}>
                                <img src = {addIcon} />
                            </div>
                            </>
                        ) : null}

                        <div className = "template-tree-item-add-inside-content" onClick = {this.handleAddInsideContent}>
                            <img src = {addInsideIcon} />
                        </div>
                        <div className = "template-tree-item-add-inside-list" onClick = {this.handleAddInsideList}>
                            <img src = {addInsideIcon} />
                        </div>

                        {this.props.parentItem ? (
                            <div className = "template-tree-item-remove" onClick = {this.handleRemove}>
                                <img src = {deleteIcon} />
                            </div>
                        ) : null}

                    </div>
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