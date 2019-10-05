import axios from "axios";

export default class FolderService { 
    constructor(token) {
        this._token = token;
        this._apiUrl = "https://localhost:44368/api/documentFolders"; 
    }

    async createNewFolder(currentFolderID, newFolderName) {
        return await axios.post(this._apiUrl, { 
            folderName: newFolderName, 
            parentFolderID: currentFolderID
        }, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    async deleteFolder(folderID) { 
        let url = `${this._apiUrl}?folderID=${folderID}`;

        return await axios.delete(url, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    async renameFolder(folderID, newFolderName) { 
        let url = `${this._apiUrl}?folderID=${folderID}`;

        return await axios.put(url, {newFolderName}, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    async getFolderData(folderID) {
        let url = `${this._apiUrl}?folderID=${folderID}`;

        return await axios.get(url, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }
} 