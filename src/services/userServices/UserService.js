import axios from "axios"

export default class UserService { 
    constructor(token) { 
        this.apiURL = "https://localhost:44368/api/users";
    }

    getUser(token) { 
        return axios.get(this.apiURL, {
            headers: { 
                "Authorization": "Bearer " + token, 
            }
        });
    }

    updateUser(token, user) { 
        return axios.put(this.apiURL, user, {
            headers: { 
                "Authorization" : "Bearer " + token,
            },
        });
    }

    searchForUsers(token, login) {
        let url = this.apiURL + "/search/login?login=" + login; 
        return axios.get(url, {
            headers: { 
                Authorization: "Bearer " + token
            }
        });
    }
}