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

export default class DocumentFolderItemContextMenu extends Component { 

    constructor(props) { 
        super(props);
    }

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
                    <MenuItem>
                        <DocumentFolderContextMenuItem src = {copyIcon} text = "Delete" />
                    </MenuItem>
                </div>
            </ContextMenu>
        )
    }
}