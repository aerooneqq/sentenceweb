import React, {Component} from "react";

//Styles
import "./DeleteBtnStyles.css";

export default class DeleteSubBtn extends Component{ 
    constructor(props){ 
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);

        alert(this.props.userID);
    }

    handleBtnClick(){ 
        this.props.deleteSubscriber(this.props.userID);
    }

    render(){ 
        return( 
            <button class = "deleteSubBtn"
                    onClick = {this.handleBtnClick}>
                Delete
            </button>
        )
    }
}