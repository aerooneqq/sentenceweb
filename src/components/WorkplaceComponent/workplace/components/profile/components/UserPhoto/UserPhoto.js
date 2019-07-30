import React, {Component, lazy, Suspense} from "react";

//Styles
import "./UserPhotoStyles.css";

import authPhto from "../../img/authenticationWhiteDataIcon.png";
import AccountVerification from "./AccountVerification/AccountVerification";

//Components
const Loader = lazy(()=>import("../../../../../../loader/Loader"));
const ProfileDataItem = lazy(()=>import("./ProfileDataItem/ProfileDataItem"));
const SignOutComponent = lazy(()=>import("./SignOut/SignOut"));
const DeleteAccountComponent = lazy(()=>import("./DeleteAccount/DeleteAccount"));

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

    if (this.props.user === null){ 
      return(
        <div id = "userPhotoloaderContainer">
          <Loader />
        </div>
      )
    }
    else { 
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
          <AccountVerification />
          <SignOutComponent />
          <DeleteAccountComponent />
        </div>
    )
    }
  }
}
