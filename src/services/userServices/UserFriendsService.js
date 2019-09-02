import axios from "axios";

export default class UserFriendsService { 
    constructor(token) { 
        this.apiURL = "https://localhost:44368/api/userFriends/";
        this._token = token;
    }

    getSubsribers() { 
        let url = this.apiURL + "subscribers";
        return axios.get(url, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    getSubscriptions() { 
        let url = this.apiURL + "subscriptions";
        return axios.get(url, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    addSubscriber(subscriberID) { 
        let url = this.apiURL + "subscribers?subscriberID=" + subscriberID;
        return axios.put(url, {}, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    addSubscription(subscriptionID) { 
        let url = this.apiURL + "subscriptions?subscriptionID=" + subscriptionID;
        return axios.put(url, {}, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    deleteSubscriber(subscriberID) { 
        let url = this.apiURL + "subscribers?subscriberID=" + subscriberID;
        return axios.delete(url, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    deleteSubscription(subscriptionID) { 
        let url = this.apiURL + "subscriptions?subscriptionID=" + subscriptionID;
        return axios.delete(url, { 
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }
} 