import React, {Component} from "react";

//Styles
import "./UserActivityLoaderStyles.css";

import UserActivityAtomLoader from "./UserActivityAtomLoader";

export default class UserActivityLoader extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <div className = "userActivityLoaderContainer">
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
                <UserActivityAtomLoader />
            </div>
        )
    }

}