import axios from "axios";
import {authorizationServerConfig, getServerAddress} from "../ServerConfig";

export default class UserPhotoService { 

    constructor(token) { 
        this._token = token;
        this._apiUrl = getServerAddress(authorizationServerConfig)  + "/userPhoto"
    }

    getUserPhoto() { 
        return axios.get(this._apiUrl, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    updateUserPhoto(photo) { 
        return axios.put(this._apiUrl, photo, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    getOtherUserPhoto(userID) {
        return axios.get(`${this._apiUrl}?userID=${userID}`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}