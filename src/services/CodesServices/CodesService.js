import axios from "axios";

export default class CodesService { 

    constructor(token) { 
        this._token = token;
        this._apiUrl = "https://localhost:44368/api/codes";
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