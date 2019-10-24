import React, {Component} from "react"

//Styles
import "./SignOutStyles.css"

//Icons
import signOutIcon from "./img/sign_out_icon.svg";

/**
 * PROPS LIST:
 * 1) signOut - the function to sign out from the system.
 */
export default class SignOut extends Component{
  constructor(){
    super();

    this.state = { 
      isHovered: false
    };

    this.handleSignOutClick = this.handleSignOutClick.bind(this);
  }

  handleSignOutClick() {
    if (this.props.signOut)
      this.props.signOut();
  }

  render() {
    return (
      <div className = "toolTipContainer">
        <button id = "signOutBtn" onClick = {this.handleSignOutClick}>
          <object type="image/svg+xml"
                  data = {signOutIcon}
                  className = "signOutIcon">
            Folder     
          </object>
        </button>

        <span className = "toolTipText">Sign out</span>
      </div>
    )
  }
}
