import React, {Component} from "react";
import {ContextMenu, MenuItem} from "react-contextmenu";

import renameIcon from "./img/branch_node_context_menu_rename.png";
import deleteIcon from "./img/branch_node_context_menu_delete.png";

//Styles
import "./BranchNodeContextMenu.css";

import BranchNodeContextMenuItem from "./BranchNodeContextMenuItem";

export default class BranchNodeContextMenu extends Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <ContextMenu id = {this.props.contextMenuID}>
                <div id = "branchNodeContextMenuInnerCont">
                    <MenuItem onClick = {this.props.renameNode}>
                        <BranchNodeContextMenuItem src = {renameIcon} text = "Edit node"/>
                    </MenuItem>
                    <MenuItem onClick = {this.props.deleteNode}>
                        <BranchNodeContextMenuItem src = {deleteIcon} text = "Delete" />
                    </MenuItem>
                </div>
            </ContextMenu>
        )
    }
}