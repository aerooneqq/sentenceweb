import React, {Component} from "react";

//Styles
import "./UserPhotoLoaderStyles.css";


export default class UserPhotoLoader extends Component { 
    render() { 
        return ( 
            <div className = "userPhotoLoaderOutterCont">
                <div className = "userPhotoLoaderTopBar"/>
                <div className = "userPhotoLoaderPhotoCont" />
            </div>
        )
    }
}