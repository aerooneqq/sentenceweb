import React, {Component} from "react";
import { ContextMenuTrigger } from "react-contextmenu";

//Styles
import "./DocumentFolderStyles.css";

//Components
import DocumentFolderContextMenu from "./DocumentFolderContextMenu/DocumentFolderContextMenu";
import DocumentFolderInput from "./DocumentFolderInput/DocumentFolderInput";
import FolderService from "../../../../../../../../services/FileSystemService/FolderService";
import { alertAppMessage } from "../../../../../../../ApplicationMessage/ApplicationMessageManager";
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";

/**
 * This is a component which represents the document folder.
 * This component has methods to:
 * 1) Get folder data
 * 2) Delete folder
 * 3) Rename folder
 * 4) Go to another folder
 * The name of the folder is represented through the dummy component DocumentFolderInput,
 * so this component stores all information about this input. This made in order to simplify work with
 * context menu
 * 
 * PROPS LIST:
 * 1) fodler - the folder object
 * 2) goToFolder - fucntion to upload another folder to the parent DocumentFolderGrid
 * 3) uploadFolderGrid - fucntion to re-upload current parent DocumentFolderGrid
 * 4) changeUpdatingState - function to switch on/off the loader in the header componen
 */
export default class DocumentFolder extends Component { 

    constructor(props) { 
        super(props);

        this.state = { 
            isInputEnabled: false,
            inputValue: props.folder.folderName,
            folder: props.folder
        };

        this.contextMenuID = `folderContextMenu${this.state.folder.ID}`;

        this.folderService = new FolderService(localStorage.getItem("token"));
        this.reponseService = new ResponseService(localStorage.getItem("token"));

        this.changeInputEditability = this.changeInputEditability.bind(this);
        this.makeInputDisabledAndRename = this.makeInputDisabledAndRename.bind(this);
        this.goToFolder = this.goToFolder.bind(this);
        this.deleteFolder = this.deleteFolder.bind(this);
        this.onInputValueChange = this.onInputValueChange.bind(this);
    }

    changeInputEditability() { 
        this.setState((prevState) => { 
            return { 
                isInputEnabled: !prevState.isInputEnabled
            }
        });
    }

    updateFolderData() { 
        this.folderService.getFolderData(this.state.folder.ID)
            .then(res => { 
                this.setState({
                    folder: res.data
                });
            }).catch(er => { 
                this.reponseService.changeUpdatingState(er, "The unknown error happened");
            })
    }

    deleteFolder() { 
        this.props.changeUpdatingState(true);

        this.folderService.deleteFolder(this.state.folder.ID)
            .then(() => { 
                this.props.uploadFolderGrid();
                this.props.changeUpdatingState(false);
                alertAppMessage("The folder was deleted", "success");
            })
            .catch(er => { 
                this.props.changeUpdatingState(false);
                this.reponseService.alertErrorMessage(er, "The unknown error occured while deleting folder");
            });
    }

    /**
     * Renames the folder and then updates the folder's data.
     */
    renameFolder() { 
        this.props.changeUpdatingState(true);

        this.folderService.renameFolder(this.state.folder.ID, this.state.inputValue)
            .then(() => { 
                this.updateFolderData();
                alertAppMessage("The folder was renamed", "success");
                this.props.changeUpdatingState(false);
            }).catch(er => { 
                this.responseService.alertErrorMessage(er, "The unknown error happened");
                this.props.changeUpdatingState(false);
            });
    }


    makeInputDisabledAndRename() { 
        this.setState({ 
            isInputEnabled: false
        }); 

        this.renameFolder();
    }

    onInputValueChange(event) { 
        this.setState({ 
            inputValue: event.target.value
        });
    }

    goToFolder() {
        this.props.goToFolder(this.state.folder.ID, true);
    }

    render() { 
        return (
            <ContextMenuTrigger id = {this.contextMenuID}>
                <div className = "documentFolderOutterContainer" onDoubleClick = {this.goToFolder}>
                    <div className = "documentFolderIcon">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
                            preserveAspectRatio="xMidYMid meet" class = "documentFolderSvgIcon">
            
                            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path d="M184 910 c-41 -16 -64 -59 -64 -116 0 -55 8 -68 34 -58 12 4 16 20
                                        16 55 0 79 0 79 311 79 l266 0 5 -51 c4 -38 12 -58 32 -77 24 -24 34 -27 99
                                        -27 l72 0 -2 44 c-2 52 -37 107 -85 136 -31 19 -54 20 -348 22 -173 1 -325 -2
                                        -336 -7z"/>
                                <path d="M56 658 c-14 -19 -16 -65 -16 -296 l0 -273 25 -24 24 -25 400 0 c272
                                        0 408 4 424 11 14 6 30 22 36 36 14 30 15 559 2 567 -5 4 -16 3 -25 0 -14 -5
                                        -16 -38 -16 -274 0 -280 -3 -300 -44 -284 -14 5 -16 32 -16 221 0 280 14 263
                                        -208 263 l-159 0 -45 40 c-25 22 -58 44 -72 50 -15 5 -88 10 -161 10 -127 0
                                        -135 -1 -149 -22z m343 -63 c63 -58 93 -65 256 -65 l145 0 0 -204 c0 -112 3
                                        -212 6 -220 6 -15 -28 -16 -352 -14 l-359 3 -3 268 -2 267 135 0 135 0 39 -35z"/>
                            </g>
                        </svg>
                    </div>  
                    <div className = "documentFolderName">
                        <DocumentFolderInput value = {this.state.inputValue} 
                                             onInputValueChange = {this.onInputValueChange}
                                             isEnabled = {this.state.isInputEnabled}
                                             makeInputDisabledAndRename = {this.makeInputDisabledAndRename}  />
                    </div>

                    <DocumentFolderContextMenu contextMenuID = {this.contextMenuID} 
                                               changeInputEditability = {this.changeInputEditability}
                                               deleteFolder = {this.deleteFolder} />
                </div>
            </ContextMenuTrigger>
        )
    }
}