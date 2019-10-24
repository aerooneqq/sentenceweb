import React from "react";

//Profile data components.
import CareerData from "./profileDataAtoms/CareerData/CareerData";
import AuthProfileData from "./profileDataAtoms/AuthProfileData/AuthProfileData";
import NameData from "./profileDataAtoms/NameData/NameData";
import LocationData from "./profileDataAtoms/LocationData/LocationData";
import Friends from "./profileDataAtoms/subscribersAndSubscriptions/Friends/Friends";

/**
 * This class represents the model of a profile data. Profile data is devided in 5 sections: career data, authentication data,
 * name data, location data and frinds data (subscribers and subscriptions).
 */
export default class ProfileDataModel { 

    setUpdateUserFunction(func) { 
        this.updateUserFunction = func;

        return this;
    }

    configureModel() { 
        this.components = [ 
            {name: "Career data", component: <CareerData user = {this.user} changeUpdatedUser = {this.updateUserFunction} />},
            {name: "Authentication data", component:<AuthProfileData user = {this.user} changeUpdatedUser = {this.updateUserFunction} />},
            {name: "Name data", component:<NameData user = {this.user} changeUpdatedUser = {this.updateUserFunction} />},
            {name: "Location data", component:<LocationData user = {this.user} changeUpdatedUser = {this.updateUserFunction} />},
            {name: "Subscrivers and subscriptions", component:<Friends user = {this.user} changeUpdatedUser = {this.updateUserFunction} />},
        ];
    }

    /**
     * Updates the given property of the user.
     * @param {The name of the property which was updated} propertyName 
     * @param {The new value of the updated property} value 
     */
    changeUpdatedUser(propertyName, value) {
        this.user[propertyName] = value;
    }

    /**
     * Discards all changes in the _user object.
     */
    discardAllChanges() { 
        for (let key in this._user) { 
            this.user[key] = this.initialUser[key];
        }
    }

    /**
     * Returns the component which is under the given index.
     * @param {The index of the profile data} index 
     */
    getProfileDataContent(index) { 
        if (index < 0 || index >= this.components.length) { 
            return null;
        }

        return this.components[index].component;
    }

    /**
     * Gets the name of the profile data component under the given index.
     * @param {The index of the profile data} index 
     */
    getProfileDataName(index) { 
        if (index < 0 || index >= this.components.length) { 
            return null;
        }
        
        return this.components[index].name;
    }
}