import React, {Component} from "react";

//Styles
import "./ProfileDataLoaderStyles.css";

export default class ProfileDataAtomLoader extends Component {
    
    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div className = "profileDataAtomLoaderCont">

                <div className = "profileDataLoaderPropertyName" />
                <div className = "profileDataLoaderPropertyDescription" />
                <div className = "profileDataLoaderPropertyInput" />

            </div>
        )
    }
}