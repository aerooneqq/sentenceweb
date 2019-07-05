import React, {Component, lazy} from "react"
import "../styles/UserPhotoStyles.css"

const ProfileDataItem = lazy(()=>import("./ProfileDataItem"))

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
          <ProfileDataItem />
          <ProfileDataItem />
          <ProfileDataItem />
          <ProfileDataItem />
          <ProfileDataItem />
        </div>
      </div>
    )
  }

}
