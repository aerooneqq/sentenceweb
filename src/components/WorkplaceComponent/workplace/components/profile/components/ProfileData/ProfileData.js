import React, {Component, lazy, Suspense} from "react";

//Styles
import "./ProfileDataContStyles.css";

//Model
import ProfileDataModel from "./ProfileDataModel";

//Components
const Loader = lazy(() => import("../../../../../../loader/Loader"));
const ProfileDataHeader = lazy(() => import("./profileDataAtoms/ProfileDataHeader/ProfileDataHeader"));
const ProfileHeader = lazy(() => import("../ProfileHeader/ProfileHeader"));

const profileDataModel = new ProfileDataModel();

export default class ProfileData extends Component {
  constructor(props){
    super(props);

    this.state = {
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
    if (this.props.user === null) { 
      return (
        <div id = "profileDataOutterContainer">
          <ProfileHeader header = "Settings"/>
          <div id = "profileDataContainer">
            <Loader />
          </div>  
        </div>
      )
    }
    else { 
      return (
          <div id = "profileDataOutterContainer">
            <ProfileHeader header = "Settings"/>
            <div id = "profileDataContainer">
              <Suspense fallback = {<Loader />}>
                  <div id = "profileDataHeaderCont">
                    <ProfileDataHeader dataName = {profileDataModel.getProfileDataName(this.props.currentUserDataIndex)}/>
                  </div>  
          
                  <div id = "profileDataContentCont">
                      {profileDataModel.getProfileDataContent(this.props.currentUserDataIndex)}
                  </div>
              </Suspense>
            </div>
          </div>
      )
    }
  }
}
