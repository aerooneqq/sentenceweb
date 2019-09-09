import React, {Component} from "react"

//Styles
import "./DeleteAccountStyles.css"

//Icons
import deleteAccountIconStatic from "./img/delete_account_icon_static.png";
import deleteAccountIconActive from "./img/delete_account_icon_active.png";

export default class DeleteAccount extends Component {

  constructor(props) { 
    super(props);

    this.state = { 
      isHovered: false
    };

    this.handleMouseLeaveEnter = this.handleMouseLeaveEnter.bind(this);
  }

  handleMouseLeaveEnter() { 
    this.setState(prevState => { 
      return { 
        isHovered: !prevState.isHovered
      }
    })
  }

  render() {
    return (
      <div className = "toolTipContainer"
           onMouseEnter = {this.handleMouseLeaveEnter}
           onMouseLeave = {this.handleMouseLeaveEnter}>
        <button id = "deleteAccountBtn">
          <img id = "deleteAccountIcon" 
               src = {this.state.isHovered === true ?  deleteAccountIconActive : deleteAccountIconStatic}
               alt = "Delete" />
        </button>
        <span className = "toolTipText">Delete account</span>
      </div>
    )
  }
}
