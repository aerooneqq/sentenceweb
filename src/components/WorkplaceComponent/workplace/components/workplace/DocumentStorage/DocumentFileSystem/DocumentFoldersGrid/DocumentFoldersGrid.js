import React, {Component} from "react";

//Styles
import "./DocumentFoldersGridStyles.css";

import DocumentFile from "../DocumentFile/DocumentFile";
import DocumentFolder from "../DocumentFolder/DocumentFolder";
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

    getFilesAndFolders() {
        this.props.changeUpdatingState(true);

        this.fileSystemService.getFoldersAndFiles(this.state.currentFolderID)
            .then(res => { 
                let folders = res.data.folders.map(folder => <DocumentFolder folder = {folder}
                                                                             goToFolder = {this.goToFolder}
                                                                             uploadFolderGrid = {this.getFilesAndFolders}
                                                                             changeUpdatingState = {this.props.changeUpdatingState}/>);
                let files = res.data.files.map(file => <DocumentFile file = {file}
                                                                     uploadFolderGrid = {this.uploadFolderGrid}
                                                                     changeUpdatingState = {this.props.changeUpdatingState} />);

                this.setState({ 
                    components: folders.concat(files)
                });

                this.props.changeUpdatingState(false);
            }).catch(er => { 
                this.setState({ 
                    components: null
                });

                this.props.changeUpdatingState(false);

                this.responseService.alertErrorMessage(er, "The error occured while getting files");
            })
    }

    createNewFolder() { 
        this.props.changeUpdatingState(true);

        let currFolderID = getFoldersHistoryManager().getCurrentFolderID();
        this.folderService.createNewFolder(currFolderID, "New folder")
            .then(() => {
                this.getFilesAndFolders();

                this.props.changeUpdatingState(false);
                alertAppMessage("The folder has been created", "success");
            }).catch(er => {
                this.setState({ 
                    isLoading: false
                });

                this.props.changeUpdatingState(false);
                this.responseService.alertErrorMessage(er, "The error occured while creating new folder");
            })
    }

    createNewFile() {
        this.props.changeUpdatingState(true);

        let currFolderID = getFoldersHistoryManager().getCurrentFolderID();
        this.fileService.createNewFile(currFolderID, "New file")
            .then(() => { 
                this.getFilesAndFolders();

                this.props.changeUpdatingState(false);
                alertAppMessage("The file has been created", "success");
            })
            .catch(er => { 
                this.setState({ 
                    isLoading: false
                })

                this.props.changeUpdatingState(false);
                this.responseService.alertErrorMessage(er, "The unknown error occured while creating new file");
            });
    }

    goToFolder(folderID, addNewFolder) { 
        this.setState({ 
            currentFolderID: folderID
        }, () => { 
            this.getFilesAndFolders();

            if (addNewFolder === true) { 
                this.foldersHistoryManager.addNewFolder(folderID);
            }
        });
    }

    render() { 
        return ( 
            <div className = "documentFoldersOutterContainer">
                <div className = "documentFolderGrid">
                    {this.state.components}
                </div>
                <FolderComponentContextMenu contextMenuID = "folderComponentContextMenu"
                                            createNewFolder = {this.createNewFolder}
                                            createNewFile = {this.createNewFile} />
            </div>
        )
    }

}