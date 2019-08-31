import axios from "axios"

export default class UserService { 
    constructor(token) { 
        this._apiURL = "https://localhost:44368/api/users";

        this._token = token;
    }

    getUser() { 
        return axios.get(this._apiURL, {
            headers: { 
                "Authorization": "Bearer " + this._token, 
            }
        });
    }

    /**
     * Sends the PUT request to the API in order to update the user record. Note that
     * data can not contain ALL properties of the user object.
     * @param {the dictionary of the properties which must be updated} data 
     */
    updateUser(data) { 
        return axios.put(this._apiURL, data, {
            headers: { 
                "Authorization" : "Bearer " + this._token,
            },
        });
    }

    searchForUsers(login) {
        let url = this._apiURL + "/search/login?login=" + login; 
        return axios.get(url, {
            headers: { 
                Authorization: "Bearer " + this._token
            }
        });
    }

    /**
     * Gets the partial user data from the api. The list of properties defines the data which will be returned.
     */
    getPartialData(properties) { 
        let url = this._apiURL + "/partial?properties=";

        for (let property of properties) { 
            url += `${property},`
        }

        return axios.get(url, { 
            headers: { 
                Authorization: "Bearer " + this._token
            }
        });
    }

    createNewUser(email, password) { 
        let url = `${this._apiURL}?email=${email}&password=${password}`;
        
        return axios.post(url);
    }
}