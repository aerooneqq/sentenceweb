import React from "react";

//Components
import DocumentMainFolder from "../DocumentMainFolder/DocumentMainFolder";

//Icons
import cloudMainFolderIcon from "./img/shared_documents_icon.svg";
import localMainFolderIcon from "./img/local_documents_icon_static.svg";

export default class DocumentFolderComponentModel { 

    constructor(goToLocalDocs, goToSharedDocs) { 
        this.startComponents = [
            <DocumentMainFolder icon = {cloudMainFolderIcon} name = "Shared"
                onClick = {goToSharedDocs} />, 
            <DocumentMainFolder icon = {localMainFolderIcon} name = "Local"
                onClick = {goToLocalDocs} />
        ];
    }

    getComponents() { 
        return this.startComponents;
    }
}