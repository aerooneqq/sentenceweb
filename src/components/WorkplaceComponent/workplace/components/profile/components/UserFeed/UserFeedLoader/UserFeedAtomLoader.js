import React, {Component} from "react";

import "./UserFeedLoaderStyles.css";

export default class UserFeedAtomLoader extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <div className = "userFeedLoaderElement">
                <div className = "userFeedLoaderUserPhoto" />
                <div className = "userFeedLoaderTextContainer">
                    <div className = "userFeedLoaderTextDate" />
                    <div className = "userFeedLoaderTextContent" />
                </div>
            </div>
        )
    }

}