import React, {Component, lazy, Suspense} from "react";

//Styles
import "./UserPhotoStyles.css";

//Icons
import careerIcon from "./img/career_profile_data_item.png";
import authorizationIcon from "./img/authorization_profile_data_item.png";
import friendsIcon from "./img/friends_profile_data_item.png"; 
import locationIcon from "./img/location_profile_data_item.png";
import nameIcon from "./img/name_profile_data_item.png";

//Services
import UserService from "../../../../../../../services/UserServices/UserService";

//Components
const Loader = lazy(()=>import("../../../../../../loader/Loader"));
const ProfileDataItem = lazy(()=>import("./ProfileDataItem/ProfileDataItem"));
const SignOutComponent = lazy(()=>import("./SignOut/SignOut"));
const DeleteAccountComponent = lazy(()=>import("./DeleteAccount/DeleteAccount"));
const AccountVerification = lazy(() => import("./AccountVerification/AccountVerification"));

export default class UserPhoto extends Component{

  constructor(props){
    super(props)

    this.userService = new UserService(localStorage.getItem("token"))

    let profileDataItems = []

    for (let i = 0; i<5; i++){ 
      let props = { 
        imgURL: careerIcon,
        currentUserData: i,
        changeUserData: this.props.changeUserData
      }

      profileDataItems.push(<ProfileDataItem data = {props} icon = {this._icons[i]}/>);
    }

    this.state = { 
      profileDataItems: profileDataItems
    }
  }

  _icons = [careerIcon, authorizationIcon, nameIcon, locationIcon, friendsIcon];

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
            {this.state.profileDataItems}
          </div>

          <AccountVerification />
          <SignOutComponent />
          <DeleteAccountComponent />

        </div>
      )
  }
}
