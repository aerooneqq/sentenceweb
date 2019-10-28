import axios from "axios";
import {nginxServerConfig, getServerAddress} from "../ServerConfig";

export default class UserPhotoService { 

    constructor(token) { 
        this._token = token;
        this._apiUrl = getServerAddress(nginxServerConfig) + "/userPhoto"
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
}