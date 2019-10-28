import axios from "axios";
import {nginxServerConfig, getServerAddress} from "../ServerConfig";

export default class UserActivitiesService{ 
    constructor(){ 
        this.apiURL = getServerAddress(nginxServerConfig) + "/useractivities"
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