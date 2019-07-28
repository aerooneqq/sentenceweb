import React, {Component, lazy, Suspense} from "react"
import "./styles/WorkplaceComponentStyles.css"

const Header = lazy(()=> import("../workplace/components/header/Header"))
const Profile = lazy(()=> import("../workplace/components/profile/Profile"))
const Loader = lazy(() => import("../loader/Loader"))

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
