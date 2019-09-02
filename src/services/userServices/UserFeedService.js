import axios from "axios";

export default class UserFeedService { 
    constructor(token) {
        this._token = token;
        this._apiURL = "https://localhost:44368/api/userFeed";
    }

    getUserFeed(token) { 
        return axios.get(this._apiURL, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    insertUserPost(message) { 
        return axios.put(this._apiURL, message, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}