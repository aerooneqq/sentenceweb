import React, {Component, lazy, Suspense} from "react"

//Styles
import "./WorkplaceComponentStyles.css"

//Components
const Header = lazy(()=> import("./workplace/components/header/Header"))
const Profile = lazy(()=> import("./workplace/components/profile/Profile"))

export default class WorkplaceComponent extends Component{
  render(){
    return (
        <div id = "workplaceContainer">
          <Header />
          <div id="contentContainer">
            <Profile />
          </div>
        </div>
    )
  }
}
