import axios from "axios";
import {authorizationServerConfig, getServerAddress} from "../ServerConfig";

export default class UserFeedService { 
    constructor(token) {
        this._token = token;
        this._apiURL = getServerAddress(authorizationServerConfig)  + "/userFeed";
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