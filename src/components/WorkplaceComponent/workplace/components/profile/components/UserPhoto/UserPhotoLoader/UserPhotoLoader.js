import React, {Component} from "react";

//Styles
import "./UserPhotoLoaderStyles.css";


export default class UserPhotoLoader extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div className = "userPhotoLoaderOutterCont">

                <div className = "userPhotoLoaderTopBar"/>
                <div className = "userPhotoLoaderPhotoCont" />

            </div>
        )
    }
}