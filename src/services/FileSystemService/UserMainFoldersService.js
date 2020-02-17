import axios from "axios";
import {authorizationServerConfig, getServerAddress} from "../ServerConfig";

export default class UserMainFoldersService {

    constructor(token) { 
        this._token = token;
        this._apiUrl = getServerAddress(authorizationServerConfig) + "/userMainFolders";
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