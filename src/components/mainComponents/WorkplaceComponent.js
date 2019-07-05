import React, {Component, Suspense, lazy} from "react"
import "./styles/WorkplaceComponentStyles.css"

const Header = lazy(()=> import("../workplace/components/header/Header"))
const Profile = lazy(()=> import("../workplace/components/profile/Profile"))

export default class WorkplaceComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Suspense fallback = {<div>Loading...</div>}>
        <div>
          <Header />
          <div id="contentContainer">
            <Profile />
          </div>
        </div>
      </Suspense>
    )
  }
}
