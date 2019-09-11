import React, {Component} from "react";

//Components
import ProfileDataAtomLoader from "./ProfileDataAtomLoader";

//Styles
import "./ProfileDataLoaderStyles.css";

export default class ProfileDataLoader extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <div className = "profileDataLoaderContainer">

                <ProfileDataAtomLoader />
                <ProfileDataAtomLoader />
                <ProfileDataAtomLoader />

                <div className = "profileDataLoaderButton" />
            </div>
        )
    }
}