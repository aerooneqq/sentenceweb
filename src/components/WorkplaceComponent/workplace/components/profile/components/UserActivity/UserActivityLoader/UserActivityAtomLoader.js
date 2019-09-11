import React, {Component} from "react";

import "./UserActivityLoaderStyles.css";

export default class UserActivityAtomLoader extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div className = "userActivityAtomLoaderCont">
                
                <div className = "userActivityAtomLoaderMonthName" />
                <div className = "userActivityAtomLoaderMonth" />

            </div>
        )
    }
}