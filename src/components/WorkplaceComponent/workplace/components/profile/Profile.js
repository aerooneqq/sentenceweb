import React, {Component, lazy} from "react"
import "./ProfileStyles.css"

//Components
import ProfileData from "./components/ProfileData/ProfileData";
import UserPhoto from "./components/UserPhoto/UserPhoto";
import UserActivityComponent from "./components/UserActivity/UserActivity";
import UserFeed from "./components/UserFeed/UserFeed";

/**
 * This component is a top-level component which unites UserPhoto, UserFeed,
 * ProfileData, UserActivity
 * 
 * PROPS LIST:
 * 1) signOut - the function to sign out from the system
 */
export default class Profile extends Component{
  
  constructor(props) {
    super(props);

    this.state = { 
      currentUserDataIndex: 2
    };

    this.changeCurrentUserData = this.changeCurrentUserData.bind(this);
  }

  changeCurrentUserData(newUserDataIndex) {
    this.setState({ 
      currentUserDataIndex: newUserDataIndex
    });
  }

  render() {
    return (
      <div id = "profileContainer">
        <div id = "userPhotoCont">
            <UserPhoto changeUserData = {this.changeCurrentUserData} 
                       signOut = {this.props.signOut}/>
        </div>

        <div id = "rightProfileCont">
          <div id = "userActivitiesOutterCont">
            <UserActivityComponent />
          </div>

          <div id = "userSettingsAndFeedOutterCont">
            <ProfileData currentUserDataIndex = {this.state.currentUserDataIndex} />
            <UserFeed />
          </div>
        </div>
      </div>
    )
  }
}
