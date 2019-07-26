import React, {Component} from "react"
import "./styles/SignOutComponent.css"

export default class SignOutComponent extends Component{
  constructor(){
    super()

    this.handleSignOutClick = this.handleSignOutClick.bind(this)
  }

  handleSignOutClick(){
    localStorage.clear();
  }

  render(){
    return(
      <button id="signOutBtn" onClick={this.handleSignOutClick}>
        <div id="signOutBtnImgContainer" src = "../img/signOutBtnImg.png" />
        <div id="signOutBtnText">Sign out</div>
      </button>
    )
  }
}
