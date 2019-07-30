import React, {Component} from "react";

//Services
import UserService from "../../../../../../../../../services/userServices/UserService";

//Styles
import "./SaveChangesStyles.css";

export default class SaveChanges extends Component{ 
    constructor(props){ 
        super(props);
        this.handleUpdateBtnClick = this.handleUpdateBtnClick.bind(this);
    }

    handleUpdateBtnClick() { 
        let userService = new UserService();
        let token = localStorage.getItem("token");
        
        this.props.setUpdatingStatus(true);
        
        alert(token);
        userService.updateUser(token, this.props.updatedUser).then(res => {
            if (res.status === 200) {
                 this.props.updateUser(res.data);
            }
        }).catch(er => { 
            alert(er);
        }).then(() => { 
            this.props.setUpdatingStatus(false);
        });
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