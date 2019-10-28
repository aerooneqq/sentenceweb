import axios from "axios";
import {nginxServerConfig, getServerAddress} from "../ServerConfig";

export default class CodesService { 

    constructor(token) { 
        this._token = token;
        this._apiUrl = getServerAddress(nginxServerConfig) + "/codes";
    }

    activateAccount(code) { 
        let url = `${this._apiUrl}?code=${code}`;
        
        return axios.put(url, code, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}