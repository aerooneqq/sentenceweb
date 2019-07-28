import axios from "axios";

export default class UserFeedService { 
    constructor(){ 
        this.apiURL = "https://localhost:44368/api/userFeed";
    }

    getUserFeed(token){ 
        return axios.get(this.apiURL, {
            headers: { 
                Authorization: "Bearer " + token
            }
        });
    }
}