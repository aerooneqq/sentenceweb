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
}