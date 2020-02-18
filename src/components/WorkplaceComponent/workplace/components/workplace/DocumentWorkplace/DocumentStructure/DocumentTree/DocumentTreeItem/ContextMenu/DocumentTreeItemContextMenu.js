import React, {Component} from "react";
import {ContextMenu, MenuItem} from "react-contextmenu";

import renameIcon from "./img/document_tree_context_menu_rename.png";
import addListParagraphIcon from "./img/document_tree_context_menu_add_list.png";
import addContentParagraphIcon from "./img/document_tree_context_menu_add_content.png";
import deleteIcon from "./img/document_tree_context_menu_delete.png";

//Styles
import "./DocumentTreeItemContextMenuStyles.css";

import DocumentTreeContextMenuItem from "./DocumentTreeContextMenuItem";

export default class DocumentTreeItemContextMenu extends Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <ContextMenu id = {this.props.contextMenuID}>
                <div id = "documentTreeContextMenuInnerCont">
                    <MenuItem onClick = {this.props.changeInputEditability}>
                        <DocumentTreeContextMenuItem src = {renameIcon} text = "Rename"/>
                    </MenuItem>
                    <MenuItem onClick = {this.props.addListItem}>
                        <DocumentTreeContextMenuItem src = {addListParagraphIcon} text = "Add list paragraph" />
                    </MenuItem>
                    <MenuItem onClick={this.props.addContentItem}>
                        <DocumentTreeContextMenuItem src = {addContentParagraphIcon} text = "Add content paragraph" />
                    </MenuItem>
                    <MenuItem onClick={this.props.deleteItem}>
                        <DocumentTreeContextMenuItem src = {deleteIcon} text = "Delete" />
                    </MenuItem>
                </div>
            </ContextMenu>
        )
    }
}