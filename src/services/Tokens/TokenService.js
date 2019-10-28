import axios from "axios";
import {nginxServerConfig, getServerAddress} from "../ServerConfig";

export default class TokenService{ 
    constructor() { 
        this.apiURL = getServerAddress(nginxServerConfig) + "/tokens?";
    }

    sendGetTokenRequest(email, password) { 
        let link = this.apiURL + "email=" + email + "&password=" + password;
        return axios(link);
    }
}