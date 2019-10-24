import React, {Component} from "react";

//Styles
import "./DeleteBtnStyles.css";

/**
 * PROPS LIST:
 * 1) deleteSubscriber
 * 2) userID
 */
export default class DeleteSubBtn extends Component { 
    constructor(props) { 
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() { 
        this.props.deleteSubscriber(this.props.userID);
    }

    render() { 
        return( 
            <button className = "deleteSubBtn"
                    onClick = {this.handleBtnClick}>
                Delete
            </button>
        )
    }
}