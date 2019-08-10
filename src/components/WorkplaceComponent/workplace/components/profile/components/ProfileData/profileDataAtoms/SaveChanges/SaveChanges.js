import React, {Component} from "react";

//Services
import UserService from "../../../../../../../../../services/userServices/UserService";

//Styles
import "./SaveChangesStyles.css";

export default class SaveChanges extends Component{ 
    constructor(props){ 
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() { 
        this.props.saveChanges();
    }

    render(){ 
        return(
            <button id = "saveChangesBtn" onClick={this.handleUpdateBtnClick}>
                <div id = "saveChangesBtnIcon"></div>    
                <div id = "saveChangesBtnText">Save</div>
            </button>
        );
    }
}