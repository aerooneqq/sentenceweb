import React, {Component, lazy, Suspense} from "react";

//Styles
import "./ProfileDataContStyles.css";

//Model
import ProfileDataModel from "./ProfileDataModel";


//Components
import ProfileDataLoader from "./ProfileDataLoader/ProfileDataLoader";
import ProfileDataHeader from "./profileDataAtoms/ProfileDataHeader/ProfileDataHeader";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import Loader from "../../../../../../loader/Loader";

const profileDataModel = new ProfileDataModel();

/**
 * The brief description of that class and components' dependencies:
 * 1) All profile text blocks are wrapped in a "textBlock" class, the style rules for this
 *    class are written in the ProfileDataContStyles.css
 * 2) All logic is placed in the ProfileDataModel class.
 * 
 * */
export default class ProfileData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirstLoad: true,
      isUpdating: true,
      userFriendsMode: "subscribers"
    };

    this.changeUpdatedUser = this.changeUpdatedUser.bind(this);
    this.discardChangesInProfileData = this.discardChangesInProfileData.bind(this);
    this.setUpdatingStatus = this.setUpdatingStatus.bind(this);
    this.changeUserFriendMode = this.changeUserFriendMode.bind(this);
    
    profileDataModel.setUpdateUserFunction(this.changeUpdatedUser).configureModel();
  }

  setUpdatingStatus(status) { 
    this.setState({ 
      isUpdating: status
    });
  }

  changeUserFriendMode(mode){ 
    this.setState({ 
      userFriendsMode: mode
    })
  }

  discardChangesInProfileData() { 
    profileDataModel.discardAllChanges();
  }

  changeUpdatedUser(propertyName, value) {
    profileDataModel.changeUpdatedUser(propertyName, value);
  }

  render() {
    if (this.state.isFirstLoad === true && this.props.user === null) { 
      return (
        <div id = "profileDataOutterContainer">
          <ProfileHeader header = "Settings"/>
          <div id = "profileDataContainer">
            <ProfileDataLoader />
          </div>  
        </div>
      )
    }
    else { 
      return (
          <div id = "profileDataOutterContainer">
            <ProfileHeader header = "Settings"/>
            <div id = "profileDataContainer">
                <div id = "profileDataHeaderCont">
                  <ProfileDataHeader dataName = {profileDataModel.getProfileDataName(this.props.currentUserDataIndex)}/>
                 </div>  
          
                <div className = "profileDataContentCont">
                    {profileDataModel.getProfileDataContent(this.props.currentUserDataIndex)}
                </div>
            </div>
          </div>
      )
    }
  }
}
