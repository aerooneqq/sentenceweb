import React, {Component, Suspense} from "react"

import Header from "../header/Header"
import AuthContentBlock from "../contents/AuthContentBlock"
import Loader from "../loader/Loader";

export default class HomeComponent extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Suspense fallback={<Loader />}>
          <Header />
          <AuthContentBlock signIn = {this.props.signIn}/>
      </Suspense>
    )
  }
}
