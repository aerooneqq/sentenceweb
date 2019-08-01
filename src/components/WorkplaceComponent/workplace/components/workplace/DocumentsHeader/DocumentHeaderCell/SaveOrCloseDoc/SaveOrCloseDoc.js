import React, {Component} from "react"

//Styles
import "./SaveOrCloseDoc.css"

export default class SaveOrCloseDoc extends Component{ 
    constructor(props){ 
        super(props);
    }

    render() { 
        return ( 
            <div className = "saveOrCloseDocContainer">
                <div className = "saveDocContainer" />
                <div className = "closeDocContainer">
                    <div className = "saveOrCloseDocLine" />
                    <div className = "saveOrCloseDocLine" />
                </div>
            </div>
        );
    }
}