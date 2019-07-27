import React, {Component} from "react";

//Styles
import "./styles/UnsubscribeBtnStyles.css";

export default class UnsubscribeBtn extends Component{ 
    constructor(props){ 
        super(props)
    }

    render() { 
        return (
            <button className = "unsubscribeBtn">
                Unsub
            </button>
        )
    }
}