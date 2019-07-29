import React, {Component} from "react"

//Styles
import "../styles/HeaderMenuBtnStyles.css"

export default class HeaderMenuBtn extends Component{ 
    constructor(props){ 
        super(props);
    }

    render() { 
        return ( 
            <div id = "headerMenuBtnCont">
                <div className = "headerMenuBtnLine" />
                <div className = "headerMenuBtnLine" />
            </div>
        );
    }
}