import axios from "axios";

export default class TokenService{ 
    constructor() { 
        this.apiURL = "https://localhost:44368/api/tokens?";
    }

    sendGetTokenRequest(email, password) { 
        let link = this.apiURL + "email=" + email + "&password=" + password;
        return axios(link);
    }
}