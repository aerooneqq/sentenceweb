import React, {Component} from "react";
import {ContextMenu, MenuItem} from "react-contextmenu";

import deleteRow from "./img/delete_row.svg";
import deleteColumn from "./img/delete_column.svg";
import addRowUnder from "./img/add_row_under.svg";
import addColumnRight from "./img/add_column_right.svg";

//Styles
import "./ContextMenu.css";

import TableCellContextMenuItem from "./TableCellContextMenuItem";

export default class TableCellContextMenu extends Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <ContextMenu id = {this.props.contextMenuID}>
                <div id = "tableCellContextMenuInnerCont">
                    <MenuItem onClick = {this.props.addRowAbove}>
                        <TableCellContextMenuItem src = {addRowUnder} text = "Add row above"/>
                    </MenuItem>
                    <MenuItem onClick = {this.props.addRowUnder}>
                        <TableCellContextMenuItem src = {addRowUnder} text = "Add row under" />
                    </MenuItem>
                    <MenuItem onClick={this.props.addColumnLeft}>
                        <TableCellContextMenuItem src = {addColumnRight} text = "Add column left" />
                    </MenuItem>
                    <MenuItem onClick={this.props.addColumnRight}>
                        <TableCellContextMenuItem src = {addColumnRight} text = "Add column right" />
                    </MenuItem>
                    <MenuItem onClick={this.props.deleteRow}>
                        <TableCellContextMenuItem src = {deleteRow} text = "Delete row" />
                    </MenuItem>
                    <MenuItem onClick={this.props.deleteColumn}>
                        <TableCellContextMenuItem src = {deleteColumn} text = "Delete column" />
                    </MenuItem>
                </div>
            </ContextMenu>
        )
    }
}