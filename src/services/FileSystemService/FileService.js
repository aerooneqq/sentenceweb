import axios from "axios";

export default class FileService { 

    constructor(token) { 
        this._token = token;
        this._apiUrl = "https://localhost:44368/api/documentFiles";
    }

    createNewFile(currentFolderID, newFileName) { 
        return axios.post(this._apiUrl, {
            fileName: newFileName, 
            parentFolderID: currentFolderID
        }, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    deleteFile(fileID) { 
        let url = `${this._apiUrl}?fileID=${fileID}`;

        return axios.delete(url, fileID, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}