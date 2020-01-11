import axios from "axios";
import {nginxServerConfig, getServerAddress} from "../ServerConfig";

export default class UserMainFoldersService {

    constructor(token) { 
        this._token = token;
        this._apiUrl = getServerAddress(nginxServerConfig) + "/userMainFolders"; 
    }
    
    async getMainFolders() {
        let url = `${this._apiUrl}`;

        return await axios.get(url, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}