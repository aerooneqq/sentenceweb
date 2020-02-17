import React from "react";
import {useDrag, DragPreviewImage} from "react-dnd";

//Components
import DocumentFile from "./DocumentFile";

import dragFileIcon from "./img/drag_document_file.svg";

function DragableDocFile(props) { 
    const [{isDragging}, drag, preview] = useDrag({ 
        item: 
        {
            type: "DocumentFolderDrop",
            fileID: props.file.ID
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    });

    let handleDoubleClick = function(e) {
        props.setDocumentID(props.file.ID);
    };

    return ( 
        <>
            <DragPreviewImage connect = {preview} src = {dragFileIcon} />
            <div ref = {drag}
                 onDoubleClick={handleDoubleClick}>
                <DocumentFile
                              file = {props.file}
                              uploadFolderGrid = {props.uploadFolderGrid}
                              changeUpdatingState = {props.changeUpdatingState}/>
            </div>
        </>
    )
}

export {DragableDocFile}