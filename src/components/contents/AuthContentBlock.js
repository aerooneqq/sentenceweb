import React, {Component} from "react"

import Authentication from "../auth/Authentication.js"
import "./AuthContentBlockStyles.css"

export default class AuthContentBlock extends Component{
  constructor(props){ 
    super(props)
  }

  render() {
    return (
      <div id="outterContainer">
        <div id="authContentBlock">
          <div id="entrySentenceContainer">
            <div className="inspiringWord">Think.</div>
            <div className="inspiringWord">Create.</div>
            <div className="inspiringWord">Render.</div>
          </div>
            <Authentication signIn = {this.props.signIn}/>
        </div>
      </div>
    )
  }
}
