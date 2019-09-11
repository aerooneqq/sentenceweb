import React, {Component} from "react"

//Styles
import "./DeleteAccountStyles.css"

//Icons
import deleteAccountIconStatic from "./img/delete_account_icon_static.png";
import deleteAccountIconActive from "./img/delete_account_icon_active.png";
import UserService from "../../../../../../../../services/UserServices/UserService";
import { alertAppMessage } from "../../../../../../../ApplicationMessage/ApplicationMessageManager";
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";

export default class DeleteAccount extends Component {

  constructor(props) { 
    super(props);

    this.state = { 
      isHovered: false
    };

    this.handleMouseLeaveEnter = this.handleMouseLeaveEnter.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  handleMouseLeaveEnter() { 
    this.setState(prevState => { 
      return { 
        isHovered: !prevState.isHovered
      }
    })
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
      <div className = "toolTipContainer"
           onMouseEnter = {this.handleMouseLeaveEnter}
           onMouseLeave = {this.handleMouseLeaveEnter}>
        <button id = "deleteAccountBtn" onClick = {this.deleteAccount}>
          <img id = "deleteAccountIcon" 
               src = {this.state.isHovered === true ?  deleteAccountIconActive : deleteAccountIconStatic}
               alt = "Delete" />
        </button>
        <span className = "toolTipText">Delete account</span>
      </div>
    )
  }
}
