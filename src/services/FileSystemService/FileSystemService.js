import axios from "axios";

export default class FileSystemService { 

    constructor(token) { 
        this._token = token;
        this._apiUrl = "https://localhost:44368/api/folderSystem";
    }

    
    getFoldersAndFiles(folderID) { 
        let url = this._apiUrl + `?folderID=${folderID}`

        return axios.get(url, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    createNewFolder(currentFolderID, newFolderName) { 
        let url = this._apiUrl + `/folders`;

        return axios.put(url, { 
            folderName: newFolderName, 
            parentFolderID: currentFolderID
        }, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    createNewFile(currentFolderID, newFileName) { 
        let url = this._apiUrl + `/files`;

        return axios.put(url, { 
            fileName: newFileName,
            parentFolderID: currentFolderID
        }, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}