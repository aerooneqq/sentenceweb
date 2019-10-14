import React, {Component} from "react";

//Styles
import "./ViewUserPageBtnStyles.css"

/**
 * PROPS LIST: 
 * 1) viewUserPage
 * 2) userID
 */
export default class ViewUserPageBtn extends Component { 

    constructor(props) { 
        super(props);

        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() { 
        this.props.viewUserPage(this.props.userID);
    }

    render() { 
        return( 
            <button className = "viewUserPageBtn"
                    onClick = {this.handleBtnClick}>
                View
            </button>
        )
    }
}