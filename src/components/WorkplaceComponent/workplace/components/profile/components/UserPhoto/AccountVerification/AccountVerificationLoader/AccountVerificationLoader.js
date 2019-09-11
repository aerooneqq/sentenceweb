import React, {Component} from "react";

//Styles
import "./AccountVerificationLoaderStyles.css"

export default class AccountVerificationLoader extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div className = "accountVerificationLoaderCont">

                <div className = "accountVerificationLoaderIcon" />
                <div className = "accountVerificationLoaderText" />

            </div>
        )
    }

}