import axios from "axios"

export default class UserService { 
    constructor(token){ 
        this.apiURL = "https://localhost:44368/api/users";
    }

    getUser(token){ 
        return axios.get(this.apiURL, {
            headers: { 
                "Authorization": "Bearer " + token, 
            }
        });
    }

    updateUser(token, user){ 
        return axios.put(this.apiURL, user, {
            headers: { 
                "Authorization" : "Bearer " + token,
            },
        });
    }
}