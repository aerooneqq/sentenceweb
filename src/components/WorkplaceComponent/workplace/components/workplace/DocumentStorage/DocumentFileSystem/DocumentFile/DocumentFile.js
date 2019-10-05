import React, {Component} from "react";

//Styles
import "./DocumentFileStyles.css";

//Components
import DocumentFileInput from "./DocumentFileInput/DocumentFileInput";
import DocumentFileContextMenu from "./DocumentFileContextMenu/DocumentFileContextMenu";

//Services
import FileService from "../../../../../../../../services/FileSystemService/FileService";
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";
import { alertAppMessage } from "../../../../../../../ApplicationMessage/ApplicationMessageManager";
import { ContextMenuTrigger } from "react-contextmenu";
import { performAction } from "../DocumentFileProcessManager";

/**
 * This component represents the document file.
 * 
 * PROPS LIST:
 * 1) file - the file object
 * 2) changeUpdatingState - changes the state of the loader indicator
 * 3) uploadFolderGrid - uplaods all files and folders of the currently opened folder.
 */
export default class DocumentFile extends Component { 

    constructor(props) { 
        super(props);

        this.state = { 
            file: props.file,
            inputValue: props.file.fileName,
            isInputEnabled: false
        }

        this.contextMenuID = `documentFile${props.file.ID}`;

        this.fileService = new FileService(localStorage.getItem("token"));
        this.responseService = new ResponseService();

        this.uploadFileData = this.uploadFileData.bind(this);
        this.disableInputAndRename = this.disableInputAndRename.bind(this);
        this.onInputValueChange = this.onInputValueChange.bind(this);
        this.changeInputEditability = this.changeInputEditability.bind(this);
    }

    uploadFileData() { 
        performAction(async () => { 
            this.props.changeUpdatingState(true);

            let res = await this.fileService.getFileData(this.state.file.ID);

            if (res.status === 200) { 
                this.setState({ 
                    file: res.data
                });

                this.props.changeUpdatingState(false);
            }
            else { 
                this.props.changeUpdatingState(false);
                this.responseService.alertErrorMessage(res, "The unknown error happened");
            }
        })
    }

    changeInputEditability() { 
        this.setState((prevState) => { 
            return { 
                isInputEnabled: !prevState.isInputEnabled
            }
        });
    }

    deleteFile() { 
        performAction(async () => { 
            let res = await this.fileService.deleteFile(this.state.file.ID);

            if (res.status === 200) { 
                this.props.uploadFolderGrid();
                alertAppMessage("The file was deleted", "success");
            }
            else { 
                this.responseService.alertErrorMessage(res  , "The inknown error happened");
            }
        })
    }

    disableInputAndRename() { 
        this.setState({ 
            isInputEnabled: false,
        }, () => {
            performAction(async () => { 
                this.props.changeUpdatingState(true);
            
                let res = await this.fileService.renameFile(this.state.file.ID,
                    this.state.inputValue);
                
                if (res.status === 200) { 
                    this.uploadFileData();
                    alertAppMessage("The file was renamed", "success");
                }
                else { 
                    this.props.changeUpdatingState(false);
                    this.responseService.alertErrorMessage(res, "The unknown error happened");
                }
            }); 
        });
    }

    onInputValueChange(event) { 
        this.setState({ 
            inputValue: event.target.value
        });
    }

    render() { 
        return ( 
            <ContextMenuTrigger id = {this.contextMenuID}>
                <div className = "documentFileContainer">
                    <div className = "documentFileIcon">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
                            preserveAspectRatio="xMidYMid meet" className = "documentFileIcon">
                            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                            fill="#f97626" stroke="none">
                                <path d="M290 894 c-60 -10 -72 -16 -90 -47 -19 -30 -20 -52 -20 -369 l0 -338
                                        29 -32 29 -33 248 -3 c175 -2 256 0 276 9 55 22 58 42 58 336 l0 268 -103 103
                                        -102 102 -107 0 c-121 0 -118 3 -118 -101 0 -64 -19 -91 -48 -72 -25 16 -25
                                        156 1 161 15 3 17 -4 15 -60 l-2 -63 -3 53 c-5 72 -23 66 -23 -8 0 -58 1 -60
                                        25 -60 26 0 26 0 23 78 l-3 77 -30 1 c-16 1 -41 0 -55 -2z m10 -100 c0 -83 11
                                        -104 53 -104 48 0 57 15 57 97 l0 73 90 0 90 0 0 -65 c0 -57 3 -68 29 -97 26
                                        -30 35 -33 100 -36 l71 -4 0 -255 0 -254 -25 -25 -25 -25 -245 3 c-219 3 -246
                                        5 -262 21 -16 16 -18 47 -21 352 l-3 335 25 25 c14 14 34 25 46 25 18 0 20 -6
                                        20 -66z"/>
                                <path d="M256 788 c-14 -19 -16 -65 -16 -305 0 -188 4 -290 11 -307 20 -42 50
                                        -47 268 -44 260 4 241 -14 241 224 0 109 -4 174 -10 174 -6 0 -10 -63 -10
                                        -169 l0 -170 -26 -20 c-25 -20 -40 -21 -216 -21 -187 0 -189 0 -213 25 l-25
                                        24 0 279 c0 229 3 282 15 298 8 10 15 22 15 27 0 15 -19 6 -34 -15z"/>
                            </g>
                        </svg>
                    </div>
                    <div className = "documentFileText">
                        <DocumentFileInput value = {this.state.inputValue}
                                           makeInputDisabledAndRename = {this.disableInputAndRename} 
                                           isEnabled = {this.state.isInputEnabled}
                                           id = {this.state.file.ID}
                                           onInputValueChange = {this.onInputValueChange} />
                    </div>

                    <DocumentFileContextMenu contextMenuID = {this.contextMenuID} 
                                             changeInputEditability = {this.changeInputEditability}
                                             deleteFile = {this.deleteFile} />
                </div>
            </ContextMenuTrigger>
        )
    }

}