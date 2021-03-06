import React, {Component} from "react";

//Styles
import "./UnsubscribeBtnStyles.css";

/**
 * PROPS LIST:
 * 1) deleteSubscription
 * 2) userID
 */
export default class UnsubscribeBtn extends Component { 
    constructor(props) { 
        super(props);

        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() { 
        this.props.deleteSubscription(this.props.userID);
    }

    render() { 
        return (
            <button className = "unsubscribeBtn"
                    onClick = {this.handleBtnClick}>
                Unsub
            </button>
        )
    }
}