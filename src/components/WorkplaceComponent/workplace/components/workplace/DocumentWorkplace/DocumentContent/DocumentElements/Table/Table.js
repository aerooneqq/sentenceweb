import React from "react";

import "./Table.css";

import DocumentElementBase from "../DocumentElementBase";
import TableCell from "./TableCell";
import { deepCopy } from "../../../../../../../../../services/Utility/UtilityFunctions";
import DocumentElementHeader from "../CommonComponents/DocumentElementHeader/DocumentElementHeader";

export default class Table extends DocumentElementBase {
    constructor(props) {
        super(props);
    }

    getDocumentElementContent(state) {
        if (!state || !state.content) {
            return (
                <></>
            )
        }

        let changeName = (newName) => {
            let newContent = deepCopy(state.content);
            newContent.name = newName;
            super.changeCurrentContent(newContent); 
        };

        let currContent = deepCopy(state.content);

        let deleteRow = (row) => {
            currContent.cells.splice(row, 1);
            super.changeCurrentContentState(deepCopy(currContent));
            super.changeCurrentContent(currContent);
        };

        let deleteColumn = (column) => {
            for (let i = 0; i < currContent.cells.length; ++i) {
                currContent.cells[i].splice(column, 1);
            }

            super.changeCurrentContentState(deepCopy(currContent));
            super.changeCurrentContent(currContent);
        };

        let addColumnLeft = (column) => {
            if (column == 0) {
                for (let i = 0; i < currContent.cells.length; ++i) {
                    currContent.cells[i].unshift({content: "asdasd"});
                }
            }
            else {
                for (let i = 0; i < currContent.cells.lngth; ++i) {
                    currContent.cells[i].splice(column - 1, 0, {content: "asdasd"});
                }
            }

            super.changeCurrentContentState(deepCopy(currContent));
            super.changeCurrentContent(currContent);
        };

        let addColumnRight = (column) => {
            if (column == currContent.cells.length - 1) {
                for (let i = 0; i < currContent.cells.length; ++i) {
                    currContent.cells[i].push({content: "asdasd"});
                } 
            }
            else {
                for (let i = 0; i < currContent.cells.length; ++i) {
                    currContent.cells[i].splice(column + 1, 0, {content: "asdasd"});
                } 
            }

            super.changeCurrentContentState(deepCopy(currContent));
            super.changeCurrentContent(currContent);
        };

        let addRowAbove = (row) => {
            let newRow = [];
            for (let i = 0; i < currContent.cells[0].length; ++i) {
                newRow.push({content: "asdasd"});
            }

            if (row == 0) {
                currContent.cells.unshift(newRow);
            }
            else {
                currContent.cells.splice(row, 0, newRow);
            }

            super.changeCurrentContentState(deepCopy(currContent));
            super.changeCurrentContent(currContent);
        };

        let addRowUnder = (row) => {
            let newRow = [];
            for (let i = 0; i < currContent.cells[0].length; ++i) {
                newRow.push({content: "asdasd"});
            }

            currContent.cells.splice(row + 1, 0, newRow);
            super.changeCurrentContentState(deepCopy(currContent));
            super.changeCurrentContent(currContent);
        };

        let getTableCells = () => {
            let getTableCell = (i, j, cell) => {
                let changeContent = (newContent, row, col) => {
                    currContent.cells[row][col].content = newContent;
                    super.changeCurrentContent(currContent);
                };
                
                super.changeCurrentContent(currContent);
                return <TableCell content = {cell.content} changeContent = {changeContent}
                                  contextMenuID = {state.currentBranchNodeID + i + j} 
                                  row = {i}
                                  column = {j}
                                  deleteRow = {deleteRow}
                                  deleteColumn = {deleteColumn}
                                  addColumnLeft = {addColumnLeft}
                                  addColumnRight = {addColumnRight}
                                  addRowAbove = {addRowAbove}
                                  addRowUnder = {addRowUnder} />
            };

            if (currContent.cells) {
                let cells = []; 

                for (let i = 0; i < currContent.cells.length; ++i) {
                    let currRow = []
                    for (let j = 0; j < currContent.cells[i].length; ++j) {
                        currRow.push(getTableCell(i, j, currContent.cells[i][j]));
                    }

                    cells.push((
                        <tr>
                            {currRow}
                        </tr>
                    ));
                }

                return cells;
            }

            return null;
        };
        
        let cells = getTableCells();

        return (
            <>
                {currContent.name ? <DocumentElementHeader name = {currContent.name} 
                                                             changeName = {changeName}/> : null}
                <div className = "table-outer-container">
                    <table>
                        {cells}
                    </table>
                </div>
            </>
        )
    }
}