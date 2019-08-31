import UserService from "../../../../../../../../services/UserServices/UserService";

export default class ProfileDataElementModel {

    constructor(properties) {
        this._properties = properties; 

        this.data = null;
        this._userService = new UserService(localStorage.getItem("token"));
    }

    /**
     * Gets the user data with respect to the properties which were set.
     * @param {fucntion which will be excecuted if the query succeded} successCallback 
     * @param {function which will be excecuted if the query fails} errorCallback 
     */
    getData(successCallback, errorCallback) { 
        return this._userService.getPartialData(this._properties).then(res => { 
            this.data = res.data;
            successCallback(res);
        }).catch(er => { 
            errorCallback(er);
        });
    }

    /**
     * Updates the given property of the data obejct.
     */
    udpateData(property, value) { 
        this.data[property] = value;
    }

    /**
     * Updates the current properties of the user record in the database.
     * @param {fucntion which will be excecuted if the query succeded} successCallback 
     * @param {function which will be excecuted if the query fails} errorCallback 
     */
    udpateUser(successCallback, errorCallback) { 
        this._userService.updateUser(this.data).then(res => { 
            successCallback(res);
        }).catch(er => { 
            errorCallback(er);
        });
    }
}