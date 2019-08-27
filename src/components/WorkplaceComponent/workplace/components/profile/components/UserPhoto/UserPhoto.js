import React, {Component, lazy, Suspense} from "react";

//Styles
import "./UserPhotoStyles.css";

//Icons
import careerIcon from "./img/career_profile_data_icon.png";
import authorizationIcon from "./img/authorization_profile_data_icon.png";
import friendsIcon from "./img/friends_profile_data_icon.png"; 
import locationIcon from "./img/location_profile_data_icon.png";
import nameIcon from "./img/name_profile_data_icon.png";

//Components
const Loader = lazy(()=>import("../../../../../../loader/Loader"));
const ProfileDataItem = lazy(()=>import("./ProfileDataItem/ProfileDataItem"));
const SignOutComponent = lazy(()=>import("./SignOut/SignOut"));
const DeleteAccountComponent = lazy(()=>import("./DeleteAccount/DeleteAccount"));
const AccountVerification = lazy(() => import("./AccountVerification/AccountVerification"));

export default class UserPhoto extends Component{

  constructor(props){
    super(props)

    let profileDataItems = []

    for (let i = 0; i<5; i++){ 
      let props = { 
        imgURL: careerIcon,
        currentUserData: i,
        changeUserData: this.props.changeUserData
      }

      profileDataItems.push(<ProfileDataItem data = {props}/>)
    }

    this.state = { 
      profileDataItems: profileDataItems
    }
  }

  render(){
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
            {this.state.profileDataItems}
          </div>

          <AccountVerification isVerified = {this.props.user.isAccountVerified}/>
          <SignOutComponent />
          <DeleteAccountComponent />

        </div>
    )
    }
  }
}
