import React, {Component} from "react"

//Styles
import "./SignOutStyles.css"

//Icons
import signOutIconStatic from "./img/sign_out_icon_static.png"
import signOutIconActive from "./img/sign_out_icon_active.png"

export default class SignOut extends Component{
  constructor(){
    super();

    this.state = { 
      isHovered: false
    };

    this.handleSignOutClick = this.handleSignOutClick.bind(this);
    this.handleMouseLeaveEnter = this.handleMouseLeaveEnter.bind(this);
  }

  handleSignOutClick() {
    localStorage.clear();
  }

  handleMouseLeaveEnter() {
    this.setState(prevState => { 
      return { 
        isHovered: !prevState.isHovered
      }
    });
  }

  render() {
    return (
      <div className = "toolTipContainer" o
           onMouseEnter = {this.handleMouseLeaveEnter}
           onMouseLeave = {this.handleMouseLeaveEnter}>
        <button id = "signOutBtn" onClick = {this.handleSignOutClick}>
          <img className = "signOutIcon" src = {this.state.isHovered === true ? signOutIconActive :
             signOutIconStatic} alt = "Sign out" />
        </button>

        <span className = "toolTipText">Sign out</span>
      </div>
    )
  }
}
