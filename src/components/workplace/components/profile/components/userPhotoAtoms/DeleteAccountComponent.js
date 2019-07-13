import React, {Component} from "react"
import "./styles/DeleteAccountCompStyles.css"

export default class DeleteAccountComponent extends Component {
  render(){
    return(
      <button id = "deleteAccountBtn">
        <div id="deleteAccBtnIconContainer" />
        <div id = "deleteAccBtnText">Delete account</div>
      </button>
    )
  }
}
