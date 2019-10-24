import React, {Component} from "react";
import {ContextMenu, MenuItem} from "react-contextmenu";

//Styles
import "./FolderComponentItemContextMenuStyles.css";

//Icons
import createNewFileIcon from "./img/create_new_file_icon.svg";
import createNewFolderIcon from "./img/create_new_folder_icon.svg";

//Components
import FolderComponentContextMenuItem from "./FolderComponentContextMenuItem";

export default class FolderComponentContextMenu extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <ContextMenu id = {this.props.contextMenuID}>
                <div id = "folderComponentContextMenuInnerCont">
                    <MenuItem onClick = {this.props.createNewFile}>
                        <FolderComponentContextMenuItem src = {createNewFileIcon} text = "Create file"/>
                    </MenuItem>
                    <MenuItem onClick = {this.props.createNewFolder}>
                        <FolderComponentContextMenuItem src = {createNewFolderIcon} text = "Create folder" />
                    </MenuItem>
                </div>
            </ContextMenu>
        )
    }
}