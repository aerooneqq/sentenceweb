import React, {Component, lazy} from "react"
import "./styles/UserPhotoStyles.css"

import authPhto from "../img/authenticationWhiteDataIcon.png"

const ProfileDataItem = lazy(()=>import("./userPhotoAtoms/ProfileDataItem"))

export default class UserPhoto extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id="photoContainer">
        <div id="photoBorder">
          <img></img>
          <div id ="uploadNewUserPhotoContainer">
            <div id="uploadNewUserPhotoImg"></div>
          </div>
        </div>
        <div id="profileDataItemsContainer">
          <ProfileDataItem imgURL = {authPhto}/>
          <ProfileDataItem imgURL = {authPhto}/>
          <ProfileDataItem imgURL = {authPhto}/>
          <ProfileDataItem imgURL = {authPhto}/>
          <ProfileDataItem imgURL = {authPhto}/>
        </div>
      </div>
    )
  }

}
