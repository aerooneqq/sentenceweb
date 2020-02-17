import React, {Component} from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

//Styles
import "./DocumentFoldersGridStyles.css";

import DocumentFile from "../DocumentFile/DocumentFile";
import {DragableDocFolder} from "../DocumentFolder/DragableDocFolder";
import {DragableDocFile} from "../DocumentFile/DragableDocFile";
import FolderComponentContextMenu from "../DocumentFoldersComponent/ContextMenu/FolderComponentContextMenu";
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";
import FileSystemService from "../../../../../../../../services/FileSystemService/FileSystemService";
import { setGoToFolderFunc, getFoldersHistoryManager } from "../DocumentFoldersComponent/FoldersHistoryManager";
import { alertAppMessage } from "../../../../../../../ApplicationMessage/ApplicationMessageManager";
import FolderService from "../../../../../../../../services/FileSystemService/FolderService";
import FileService from "../../../../../../../../services/FileSystemService/FileService";


/**
 * DocumentFolderGrid is a component where al the folders and files are displayed.
 * In this component there is a fucntionality to 
 * 1) GET FILES/FOLDERS
 * 2) CREATE FILES/FOLDERS
 * 3) UPLOAD OTHER FOLDERS
 * 
 * PROPS LIST:
 * 1) folderID
 * 2) changeUpdatingState - function to switch on/off the loader.
 */
export default class DoumentFoldersGrid extends Component { 

    constructor(props) { 
        super(props);

        this.responseService = new ResponseService();
        this.fileSystemService = new FileSystemService(localStorage.getItem("token"));
        this.folderService = new FolderService(localStorage.getItem("token"));
        this.fileService = new FileService(localStorage.getItem("token"));

        this.state = { 
            isLoading: false,
            components: null,
            currentFolderID: props.folderID
        }

        this.getFilesAndFolders = this.getFilesAndFolders.bind(this);
        this.goToFolder = this.goToFolder.bind(this);
        this.createNewFolder = this.createNewFolder.bind(this);
        this.createNewFile = this.createNewFile.bind(this);

        setGoToFolderFunc(this.goToFolder);
        this.foldersHistoryManager = getFoldersHistoryManager();
    }

    componentDidMount() { 
        this.getFilesAndFolders();
    }

    async getFilesAndFolders() {
        this.props.changeUpdatingState(true);
        let data = await this.fileSystemService.getFoldersAndFiles(this.state.currentFolderID);

        if (data.status === 200) { 
            this.setState({ 
                components: null   
            }, () => { 
                let res = data.data;
                let folders = res.folders.map(folder => <DragableDocFolder folder = {folder}
                                                                           goToFolder = {this.goToFolder}
                                                                           uploadFolderGrid = {this.getFilesAndFolders}
                                                                           changeUpdatingState = {this.props.changeUpdatingState}/>);
                let files = res.files.map(file => <DragableDocFile file = {file}
                                                                   uploadFolderGrid = {this.getFilesAndFolders}
                                                                   changeUpdatingState = {this.props.changeUpdatingState}
                                                                   setDocumentID = {this.props.setDocumentID}/>);
                
                this.setState({ 
                    components: folders.concat(files)
                });
            })
        }
        else { 
            this.setState({ 
                components: null
            });

            this.responseService.alertErrorMessage(data, "The error occured while getting files");
        }
        
        this.props.changeUpdatingState(false);
    }

    async createNewFolder() { 
        this.props.changeUpdatingState(true);

        let currFolderID = getFoldersHistoryManager().getCurrentFolderID();

        let res = await this.folderService.createNewFolder(currFolderID, "New folder");

        if (res.status === 200) { 
            this.getFilesAndFolders();

            this.props.changeUpdatingState(false);
            alertAppMessage("The folder has been created", "success");
        }
        else { 
            this.setState({ 
                isLoading: false
            });

            this.props.changeUpdatingState(false);
            this.responseService.alertErrorMessage(res, "The error occured while creating new folder");
        }
    }

    async createNewFile() {
        this.props.changeUpdatingState(true);

        let currFolderID = getFoldersHistoryManager().getCurrentFolderID();
        let res = await this.fileService.createNewFile(currFolderID, "New file");

        if (res.status === 200) { 
            this.getFilesAndFolders();

            this.props.changeUpdatingState(false);
            alertAppMessage("The file has been created", "success");
        }
        else { 
            this.setState({ 
                isLoading: false
            })

            this.props.changeUpdatingState(false);
            this.responseService.alertErrorMessage(res,
                 "The unknown error occured while creating new file");
        }
    }

    goToFolder(folderID, addNewFolder) { 
        this.setState({ 
            currentFolderID: folderID
        }, async () => { 
            await this.getFilesAndFolders();

            if (addNewFolder === true) { 
                this.foldersHistoryManager.addNewFolder(folderID);
            }
        });
    }

    render() { 
        return ( 
            <div className = "documentFoldersOutterContainer">
                <div className = "documentFolderGrid">
                    <DndProvider backend = {HTML5Backend}>
                        {this.state.components}
                    </DndProvider>
                </div>
                <FolderComponentContextMenu contextMenuID = "folderComponentContextMenu"
                                            createNewFolder = {this.createNewFolder}
                                            createNewFile = {this.createNewFile} />
            </div>
        )
    }

}