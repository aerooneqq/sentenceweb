import React, {Component} from "react"

//Styles
import "./DeleteAccountStyles.css"

//Icons
import deleteAccountIcon from "./img/delete_account_icon.svg";

//Services
import UserService from "../../../../../../../../services/UserServices/UserService";
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";

import { alertAppMessage } from "../../../../../../../ApplicationMessage/ApplicationMessageManager";

export default class DeleteAccount extends Component {

  constructor(props) { 
    super(props);

    this.state = { 
      isHovered: false
    };
    
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  deleteAccount() {
    new UserService(localStorage.getItem("token")).deleteAccount().then(() => { 
      alertAppMessage("The account was deleted!", "success");
      localStorage.removeItem("token");
    }).catch(er => { 
      new ResponseService().alertErrorMessage(er, "The error happened while deleting the account");
    })
  }

  render() {
    return (
      <div className = "toolTipContainer">
        <button id = "deleteAccountBtn" onClick = {this.deleteAccount}>
          <img id = "deleteAccountIcon" 
               src = {deleteAccountIcon}
               alt = "Delete" />
        </button>
        <span className = "toolTipText">Delete account</span>
      </div>
    )
  }
}
