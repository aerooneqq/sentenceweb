import axios from "axios";

export default class FileService { 

    constructor(token) { 
        this._token = token;
        this._apiUrl = "https://localhost:44368/api/documentFiles";
    }

    async createNewFile(currentFolderID, newFileName) { 
        return await axios.post(this._apiUrl, {
            fileName: newFileName, 
            parentFolderID: currentFolderID
        }, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    async deleteFile(fileID) { 
        let url = `${this._apiUrl}?fileID=${fileID}`;

        return await axios.delete(url, fileID, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    async getFileData(fileID) { 
        let url = `${this._apiUrl}?fileID=${fileID}`;
        
        return await axios.get(url, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    async renameFile(fileID, newFileName) { 
        let url = `${this._apiUrl}`;

        return await axios.put(url, {
            fileID: fileID,
            newFileName: newFileName
        }, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}