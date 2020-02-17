import axios from "axios";
import {authorizationServerConfig, getServerAddress} from "../ServerConfig";

export default class UserActivitiesService{ 
    constructor(){ 
        this.apiURL = getServerAddress(authorizationServerConfig)  + "/useractivities"
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