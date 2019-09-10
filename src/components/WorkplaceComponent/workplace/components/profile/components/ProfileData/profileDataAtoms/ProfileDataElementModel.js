import UserService from "../../../../../../../../services/UserServices/UserService";

export default class ProfileDataElementModel {

    constructor(properties) {
        this._properties = properties; 

        this.data = null;
        this.copiedData = {};

        this._userService = new UserService(localStorage.getItem("token"));
    }

    /**
     * Gets the user data with respect to the properties which were set.
     * @param {fucntion which will be excecuted if the query succeded} successCallback 
     * @param {function which will be excecuted if the query fails} errorCallback 
     */
    getData(successCallback, errorCallback) { 
        return this._userService.getPartialData(this._properties).then(res => 
        { 
            this.data = res.data;
            this._createDataCopy();

            successCallback(res);
        })
        .catch(er => 
        { 
            errorCallback(er);
        });
    }

    _createDataCopy() { 
        for (let key in this.data) { 
            this.copiedData[key] = this.data[key];
        }
    }

    discardChanges() { 
        for (let key in this.data) { 
            this.data[key] = this.copiedData[key];
        }
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