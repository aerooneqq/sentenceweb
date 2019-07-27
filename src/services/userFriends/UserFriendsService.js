import axios from "axios";

export default class UserFriendsService { 
    constructor() { 
        this.apiURL = "https://localhost:44368/api/userFriends/";
    }

    getSubsribers(token) { 
        let url = this.apiURL + "subscribers";
        return axios.get(url, {
            headers: { 
                Authorization: "Bearer " + token
            }
        });
    }

    getSubscriptions(token){ 
        let url = this.apiURL + "subscriptions";
        return axios.get(url, { 
            headers: { 
                Authorization: "Bearer " + token
            }
        });
    }
} 