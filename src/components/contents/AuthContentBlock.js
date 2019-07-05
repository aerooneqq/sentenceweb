import React, {Component} from "react"

import Authentication from "../auth/Authentication.js"
import DeviceContext from "../../contexts/DeviceContext.js"
import "./AuthContentBlockStyles.css"

export default class AuthContentBlock extends Component{
  static contextType = DeviceContext

  constructor(props){
    super(props)
  }

  render(){
    let inspiringWordsClass = this.context == "mobile" ? "mobileinspiringWord" : "desktopinspiringWord"

    return (
      <div id="outterContainer">
        <div id="authContentBlock" className={this.context == "mobile"
             ? "mobileAuthContentBlock" : "desktopAuthContentBlock"}>
          <div id="entrySentenceContainer">
            <div className={inspiringWordsClass}>Think.</div>
            <div className={inspiringWordsClass}>Create.</div>
            <div className={inspiringWordsClass}>Render.</div>
          </div>
          <div>
            <Authentication/>
          </div>
        </div>
      </div>
    )
  }
}
