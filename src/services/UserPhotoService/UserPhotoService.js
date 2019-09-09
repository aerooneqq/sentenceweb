import axios from "axios";

export default class UserPhotoService { 

    constructor(token) { 
        this._token = token;
        this._apiUrl = "https://localhost:44368/api/userPhoto"
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