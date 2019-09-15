import React, {Component} from "react";
import {ContextMenu, MenuItem} from "react-contextmenu";

//Styles
import "./DocumentFolderItemContextMenuStyles.css";

//Icons
import renameIcon from "./img/document_folder_context_rename.svg";
import deleteIcon from "./img/document_folder_context_delete.svg";
import copyIcon from "./img/document_folder_context_copy.svg"

//Components
import DocumentFolderContextMenuItem from "./DocumentFolderContextMenuItem";

/**
 * This is the DocumentFolderContextMenu, which supports the following:
 * 1) Rename
 * 2) Copy
 * 3) Delete
 */
export default class DocumentFolderItemContextMenu extends Component { 

    render() { 
        return ( 
            <ContextMenu id = {this.props.contextMenuID}>
                <div id = "documentFolderContextMenuInnerCont">
                    <MenuItem onClick = {this.props.changeInputEditability}>
                        <DocumentFolderContextMenuItem src = {renameIcon}  text = "Rename"/>
                    </MenuItem>
                    <MenuItem>
                        <DocumentFolderContextMenuItem src = {deleteIcon} text = "Copy" />
                    </MenuItem>
                    <MenuItem onClick = {this.props.deleteFolder}>
                        <DocumentFolderContextMenuItem src = {copyIcon} text = "Delete" />
                    </MenuItem>
                </div>
            </ContextMenu>
        )
    }
}