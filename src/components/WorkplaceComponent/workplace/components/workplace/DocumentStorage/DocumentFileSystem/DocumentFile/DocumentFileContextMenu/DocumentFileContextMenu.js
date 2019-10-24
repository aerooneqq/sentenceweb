import React, {Component} from "react";
import {ContextMenu, MenuItem} from "react-contextmenu";

//Styles
import "./DocumetFileContextMenuStyles.css";

//Components
import DocumentFileContextMenuItem from "./DocumentFileContextMenuItem";

//Icons
import renameIcon from "./img/document_file_context_rename.svg";
import deleteIcon from "./img/document_file_context_delete.svg";
import copyIcon from "./img/document_file_context_copy.svg";

export default class DocumentFileContextMenu extends Component { 

    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <ContextMenu id = {this.props.contextMenuID}>
                <div id = "documentFileContextMenuInnerCont">
                    <MenuItem onClick = {this.props.changeInputEditability}>
                        <DocumentFileContextMenuItem src = {renameIcon}  text = "Rename"/>
                    </MenuItem>
                    <MenuItem>
                        <DocumentFileContextMenuItem src = {deleteIcon} text = "Copy" />
                    </MenuItem>
                    <MenuItem onClick = {this.props.deleteFile}>
                        <DocumentFileContextMenuItem src = {copyIcon} text = "Delete" />
                    </MenuItem>
                </div>
            </ContextMenu>
        )
    }

}