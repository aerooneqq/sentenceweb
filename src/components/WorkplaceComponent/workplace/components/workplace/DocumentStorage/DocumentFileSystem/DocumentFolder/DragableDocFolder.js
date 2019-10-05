import React from "react";
import DocumentFolder from "./DocumentFolder";
import {useDrag, DragPreviewImage} from "react-dnd";
import {useDrop} from "react-dnd";
import dragFolderIcon from "./img/DocumentFolderDragIcon.svg";
import {alertAppMessage} from "../../../../../../../ApplicationMessage/ApplicationMessageManager";
import FolderService from "../../../../../../../../services/FileSystemService/FolderService";
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";
import FileSystemService from "../../../../../../../../services/FileSystemService/FileSystemService";

function DragableDocFolder(props) { 

    const[, drop] = useDrop({ 
        accept: "DocumentFolderDrop",
        drop: async (item) => { 
            props.changeUpdatingState(true);
            let fileSystemService = new FileSystemService(localStorage.getItem("token"));
            let responseService = new ResponseService();

            if (item.folderID) { 
                let res = await fileSystemService.placeOneFolderInAnother(props.folder.ID, item.folderID);
                
                if (res.status === 200) { 
                    alertAppMessage("The folder was replaced", "success");
                }
                else { 
                    responseService.alertErrorMessage(res);
                }

                props.changeUpdatingState(false);
            }
            else { 
                let res = await fileSystemService.placeFileInFolder(props.folder.ID, item.fileID);

                if (res.status === 200) { 
                    alertAppMessage("The file was replaced", "success");
                }
                else { 
                    responseService.alertErrorMessage(res);
                }

                props.changeUpdatingState(false);
            }

            await props.uploadFolderGrid();
        }
    });

    const [{ isDragging }, drag, preview] = useDrag({
        item: { 
            type: "DocumentFolderDrop",
            folderID: props.folder.ID
        },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
    });

    return ( 
        <>
            <DragPreviewImage connect = {preview} src = {dragFolderIcon} />
            <div ref = {drag}>
                <div ref = {drop}>
                    <DocumentFolder folder = {props.folder} 
                                    goToFolder = {props.goToFolder}
                                    uploadFolderGrid = {props.uploadFolderGrid}
                                    changeUpdatingState = {props.changeUpdatingState}/>
                </div>
            </div>
        </>
    )
}

export {DragableDocFolder}

