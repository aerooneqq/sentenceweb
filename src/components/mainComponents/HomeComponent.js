import React, {Component} from "react"

import Header from "../header/Header"
import AuthContentBlock from "../contents/AuthContentBlock"
import DeviceContext from "../../contexts/DeviceContext.js"

export default class HomeComponent extends Component{
  static contextType = DeviceContext

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
          <Header />
          <AuthContentBlock />
      </div>
    )
  }
}
