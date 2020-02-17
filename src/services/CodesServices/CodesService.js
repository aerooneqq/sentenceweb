import axios from "axios";
import {authorizationServerConfig, getServerAddress} from "../ServerConfig";

export default class CodesService { 

    constructor(token) { 
        this._token = token;
        this._apiUrl = getServerAddress(authorizationServerConfig) + "/codes";
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