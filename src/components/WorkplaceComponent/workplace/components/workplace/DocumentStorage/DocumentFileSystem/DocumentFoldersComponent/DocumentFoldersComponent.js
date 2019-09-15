import React, {Component} from "react";

//Styles
import "./DocumentFoldersComponentStyles.css";

//Icons
import cloudMainFolderIcon from "./img/shared_documents_icon.svg";
import localMainFolderIcon from "./img/local_documents_icon_static.svg";

//Components
import DocumentFoldersGrid from "../DocumentFoldersGrid/DocumentFoldersGrid";
import DocumentMainFolder from "../DocumentMainFolder/DocumentMainFolder";

//Services
import FileSystemService from "../../../../../../../../services/FileSystemService/FileSystemService";
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";

import { ContextMenuTrigger } from "react-contextmenu";
import {initializeManager, getFoldersHistoryManager, setGoToStartingScreenFunc} from "./FoldersHistoryManager";

/**
 * DocumentFoldersComponent is a component where the files and folders are displayed.
 * This component uses DocumentFoldersGrid to display files and folders.
 */
export default class DocumentFoldersComponent extends Component { 

    constructor(props) { 
        super(props);

        this.handleLocalDocsClick = this.handleLocalDocsClick.bind(this);
        this.handleSharedDocsClick = this.handleSharedDocsClick.bind(this);
        this.goToStartingScreen = this.goToStartingScreen.bind(this);

        //This is initializes the manager which stores the history of visited folders.
        initializeManager();
        //This fucntion sets the fucntion which is used to get back to the starting screen
        //(the screen with two main folders)
        setGoToStartingScreenFunc(this.goToStartingScreen);
        
        this.fileSystemService = new FileSystemService(localStorage.getItem("token"));
        this.responseService = new ResponseService();

        this.startComponents = [ 
            <DocumentMainFolder icon = {cloudMainFolderIcon} name = "Shared"
                onClick = {this.handleSharedDocsClick} />, 
            <DocumentMainFolder icon = {localMainFolderIcon} name = "Local"
                onClick = {this.handleLocalDocsClick} />
        ]

        this.state = { 
            isLoading: false,
            component: this.startComponents,
            currentFolderID: null
        }
    }

    goToStartingScreen() { 
        this.setState({ 
            isLoading: false,
            component: this.startComponents,
            currentFolderID: null
        })
    }

    handleSharedDocsClick() {
        getFoldersHistoryManager().clear();
        getFoldersHistoryManager().addNewFolder(-1);
        
        this.setState({ 
            component: <DocumentFoldersGrid folderID = {-1} 
                                            changeUpdatingState = {this.props.changeUpdatingState} />,
            currentFolderID: -1
        });
    }

    handleLocalDocsClick() { 
        getFoldersHistoryManager().clear();
        getFoldersHistoryManager().addNewFolder(-2);

        this.setState({ 
            component: <DocumentFoldersGrid folderID = {-2} 
                                            changeUpdatingState = {this.props.changeUpdatingState} />,
            currentFolderID: -1
        });
    }

    render() { 
        return (
            <ContextMenuTrigger id = "folderComponentContextMenu">
                <div className = "documentFolderSpaceContainer">
                    <div className = "documentFoldersContentContainer">
                        {this.state.component}
                    </div>
                </div>
            </ContextMenuTrigger> 
        )
    }
}