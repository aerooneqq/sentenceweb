import React, {Component} from "react"

//Styles
import "./DeleteAccountStyles.css"

export default class DeleteAccount extends Component {
  render(){
    return(
      <button id = "deleteAccountBtn">
        <div id="deleteAccBtnIconContainer" />
        <div id = "deleteAccBtnText">Delete account</div>
      </button>
    )
  }
}
