import React, {Component} from "react";

//Styles
import "./SubscribeBtnStyles.css";

export default class SubscribeBtn extends Component { 
    constructor(props) { 
        super(props);

        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick(){ 
        this.props.subscribe(this.props.userID);
    }

    render(){ 
        return ( 
            <button className = "subscribeBtn"
                    onClick = {this.handleBtnClick}>
                Subscribe
            </button>
        )
    }
}