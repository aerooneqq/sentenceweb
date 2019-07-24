import axios from "axios"

export default class UserActivitiesService{ 
    constructor(){ 
        this.apiURL = "https://localhost:44368/api/useractivity"
    }

    async getUserActivities(id, token){ 
        let url = this.apiURL;
        let userActivities = await axios.get(url, { 
            headers: { 
                Authorization: "Bearer " + token
            }
        });

        return await userActivities.data;
    }
}