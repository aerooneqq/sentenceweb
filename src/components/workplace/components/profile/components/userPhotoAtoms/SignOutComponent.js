import React, {Component} from "react"
import "./styles/SignOutComponent.css"

export default class SignOutComponent extends Component{
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    localStorage.clear()
  }

  render(){
    return(
      <button id="signOutBtn" onClick={this.handleClick}>
        <div id="signOutBtnImgContainer" src = "../img/signOutBtnImg.png" />
        <div id="signOutBtnText">Sign out</div>
      </button>
    )
  }
}
