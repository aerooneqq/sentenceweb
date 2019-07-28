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

    addSubscriber(token, subscriberID){ 
        let url = this.apiURL + "subscribers?subscriberID=" + subscriberID;
        return axios.put(url, {}, {
            headers: { 
                Authorization: "Bearer " + token
            }
        });
    }

    addSubscription(token, subscriptionID){ 
        let url = this.apiURL + "subscriptions?subscriptionID=" + subscriptionID;
        return axios.put(url, {}, { 
            headers: { 
                Authorization: "Bearer " + token
            }
        });
    }

    deleteSubscriber(token, subscriberID){ 
        let url = this.apiURL + "subscribers?subscriberID=" + subscriberID;
        alert(subscriberID);
        return axios.delete(url, { 
            headers: { 
                Authorization: "Bearer " + token
            }
        });
    }

    deleteSubscription(token, subscriptionID){ 
        let url = this.apiURL + "subscriptions?subscriptionID=" + subscriptionID;
        return axios.delete(url, { 
            headers: { 
                Authorization: "Bearer " + token
            }
        });
    }
} 