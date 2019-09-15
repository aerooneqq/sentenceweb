import axios from "axios";

export default class FolderService { 

    constructor(token) {
        this._token = token;
        this._apiUrl = "https://localhost:44368/api/documentFolders"; 
    }

    createNewFolder(currentFolderID, newFolderName) {
        return axios.put(this._apiUrl, { 
            folderName: newFolderName, 
            parentFolderID: currentFolderID
        }, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    deleteFolder(folderID) { 
        let url = `${this._apiUrl}?folderID=${folderID}`;

        return axios.delete(url, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    renameFolder(folderID, newFolderName) { 
        let url = `${this._apiUrl}?folderID=${folderID}`;
        alert(newFolderName);

        return axios.put(url, {newFolderName}, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    getFolderData(folderID) {
        let url = `${this._apiUrl}?folderID=${folderID}`;

        return axios.get(url, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }
} 