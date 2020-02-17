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
import UserMainFoldersService from "../../../../../../../../services/FileSystemService/UserMainFoldersService";

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
        this.userMainFoldersService = new UserMainFoldersService(localStorage.getItem("token"));

        this.startComponent = (
            <div className = "startFoldersGrid">
                <div className = "startFolderGridOutterCont">
                    <DocumentMainFolder icon = {cloudMainFolderIcon} name = "Projects"
                                        onClick = {this.handleSharedDocsClick} />
                </div>
                <div className = "startFolderGridOutterCont">
                    <DocumentMainFolder icon = {localMainFolderIcon} name = "Local"
                                        onClick = {this.handleLocalDocsClick} />   
                </div>
            </div>
        );

        this.state = { 
            isLoading: true,
            component: this.startComponent,
            currentFolderID: null,
            mainFolderIDs: {}
        }
    }

    async componentDidMount() {
        let mainFoldersIDs = await this.userMainFoldersService.getMainFolders();

        this.setState({
            mainFolderIDs: {
                "Projects": mainFoldersIDs.data.projectsFolderID,
                "Local": mainFoldersIDs.data.localFolderID
            },
            isLoading: false
        });
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
        getFoldersHistoryManager().addNewFolder(this.state.mainFolderIDs["Projects"]);
        
        this.setState({ 
            component: <DocumentFoldersGrid folderID = {this.state.mainFolderIDs["Projects"]} 
                                            changeUpdatingState = {this.props.changeUpdatingState}
                                            setDocumentID = {this.props.setDocumentID}/>,
            currentFolderID: this.state.mainFolderIDs["Projects"]
        });
    }

    handleLocalDocsClick() { 
        getFoldersHistoryManager().clear();
        getFoldersHistoryManager().addNewFolder(this.state.mainFolderIDs["Local"]);

        this.setState({ 
            component: <DocumentFoldersGrid folderID = {this.state.mainFolderIDs["Local"]} 
                                            changeUpdatingState = {this.props.changeUpdatingState}
                                            setDocumentID = {this.props.setDocumentID}/>,
            currentFolderID: this.state.mainFolderIDs["Local"]  
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