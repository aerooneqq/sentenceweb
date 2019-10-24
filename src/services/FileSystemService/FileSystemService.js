import axios from "axios";

export default class FileSystemService { 

    constructor(token) { 
        this._token = token;
        this._apiUrl = "https://localhost:44368/api/folderSystem";
    }

    
    async getFoldersAndFiles(folderID) { 
        let url = this._apiUrl + `?folderID=${folderID}`

        return await axios.get(url, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    async placeOneFolderInAnother(firstFolderID, secondFolderID) { 
        let url = `${this._apiUrl}/replaceFolder?firstFolderID=${firstFolderID}&secondFolderID=${secondFolderID}`;

        return await axios.put(url, {}, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    async placeFileInFolder(folderID, fileID) { 
        let url = `${this._apiUrl}/replaceFile?fileID=${fileID}&folderID=${folderID}`;

        return await axios.put(url, {}, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}