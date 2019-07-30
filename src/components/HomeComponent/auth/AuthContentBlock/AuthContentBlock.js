import React, {Component, lazy, Suspense} from "react"

//Styles
import "./AuthContentBlockStyles.css"
import Loader from "../../../loader/Loader";

//Components
const Authentication = lazy(() => import("../Authentication/Authentication"));
const InspiringWords = lazy(() => import("../InspiringWords/InspiringWords"));

export default class AuthContentBlock extends Component{
  constructor(props){ 
    super(props)
  }

  render() {
    return (
      <Suspense fallback = {<Loader />}>
        <div id="outterContainer">
          <div id="authContentBlock">
              <InspiringWords />
              <Authentication signIn = {this.props.signIn}/>
          </div>
        </div>
      </Suspense>
    )
  }
}
