import axios from "axios";
import {authorizationServerConfig, getServerAddress} from "../ServerConfig";

export default class TokenService{ 
    constructor() { 
        this.apiURL = "http://localhost:3000"  + "/authorization?";
    }

    sendGetTokenRequest(email, password) { 
        let link = this.apiURL + "email=" + email + "&password=" + password;
        return axios(link);
    }
}