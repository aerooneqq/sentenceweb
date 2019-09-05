import axios from "axios";

export default class UserActivitiesService{ 
    constructor(){ 
        this.apiURL = "https://localhost:44368/api/useractivities"
    }

    getUserActivities(token){ 
        let url = this.apiURL;
        return axios.get(url, { 
            headers: { 
                Authorization: "Bearer " + token
            }
        });
    }
}