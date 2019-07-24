import React, {Component, Suspense} from "react"

import Header from "../header/Header"
import AuthContentBlock from "../contents/AuthContentBlock"
import DeviceContext from "../../contexts/DeviceContext.js"
import Loader from "../loader/Loader";

export default class HomeComponent extends Component{
  static contextType = DeviceContext

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Suspense fallback={<Loader />}>
        <div>
          <Header />
          <AuthContentBlock signIn = {this.props.signIn}/>
        </div>
      </Suspense>
    )
  }
}
