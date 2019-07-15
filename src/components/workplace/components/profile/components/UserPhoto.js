import React, {Component, lazy, Suspense} from "react"
import "./styles/UserPhotoStyles.css"

import authPhto from "../img/authenticationWhiteDataIcon.png"

const Loader = lazy(()=>import("../../../../loader/Loader"))
const ProfileDataItem = lazy(()=>import("./userPhotoAtoms/ProfileDataItem"))

export default class UserPhoto extends Component{
  constructor(props){
    super(props)
  }

  render(){
    let profileDataItems = []

    for (let i = 0; i<5; i++){ 
      let props = { 
        imgURL: authPhto,
        currentUserData: i,
        changeUserData: this.props.changeUserData
      }

      profileDataItems.push(<ProfileDataItem data = {props}/>)
    }

    return (
        <div id="photoContainer">
          <div id="photoBorder">
            <img></img>
            <div id ="uploadNewUserPhotoContainer">
              <div id="uploadNewUserPhotoImg"></div>
            </div>
          </div>
          <div id="profileDataItemsContainer">
            {profileDataItems}
          </div>
        </div>
    )
  }
}
