import React, {Component} from "react";

import "./UserFeedLoaderStyles.css";
import UserFeedAtomLoader from "./UserFeedAtomLoader";

export default class UserFeedLoader extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <div className = "userFeedLoaderContainer">

                <UserFeedAtomLoader />
                <UserFeedAtomLoader />
                <UserFeedAtomLoader />
                <UserFeedAtomLoader />

            </div>
        )
    }

}