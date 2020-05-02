import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./Table.css";
import ContentEditableSpan from "../../../../../../../../ContentEditable/ContentEditableSpan";
import { ContextMenuTrigger } from "react-contextmenu";
import TableCellContextMenu from "./ContextMenu/TableCellContextMenu";

export default class TableCell extends Component {
    constructor(props) {
        super(props);

        this.changeContent = this.changeContent.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.deleteColumn = this.deleteColumn.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.addColumnLeft = this.addColumnLeft.bind(this);
        this.addColumnRight = this.addColumnRight.bind(this);
        this.addRowAbove = this.addRowAbove.bind(this);
        this.addRowUnder = this.addRowUnder.bind(this);
    }

    changeContent(newText) {
        this.props.changeContent(newText, this.props.row, this.props.column);
    }

    handleClick() {
        ReactDOM.findDOMNode(this).getElementsByTagName("div")[0].getElementsByTagName("span")[0].focus();
    }

    deleteRow() {
        this.props.deleteRow(this.props.row);
    }

    deleteColumn() {
        this.props.deleteColumn(this.props.column);
    }

    addRowAbove() {
        this.props.addRowAbove(this.props.row);
    }

    addRowUnder() { 
        this.props.addRowUnder(this.props.row);
    }

    addColumnLeft() {
        this.props.addColumnLeft(this.props.column);
    }

    addColumnRight() {
        this.props.addColumnRight(this.props.column);
    }

    render() {
        return (
            <>
                <td className = "table-cell"
                    onClick = {this.handleClick}>
                    <ContextMenuTrigger id = {this.props.contextMenuID}>
                        <ContentEditableSpan text = {this.props.content} 
                                             color = {"black"}
                                             fontSize = {"18px"}
                                             marginTop = {-2}
                                             maxWidth = {300}
                                             onChange = {this.changeContent}/>
                    </ContextMenuTrigger>

                    <TableCellContextMenu contextMenuID = {this.props.contextMenuID}
                                          deleteRow = {this.deleteRow}
                                          deleteColumn = {this.deleteColumn}
                                          addColumnLeft = {this.addColumnLeft}
                                          addColumnRight = {this.addColumnRight}
                                          addRowAbove = {this.addRowAbove}
                                          addRowUnder = {this.addRowUnder} />
                </td>
            </>
        )
    }
}