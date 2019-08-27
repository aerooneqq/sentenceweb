import React, {Component, Suspense, lazy} from "react"
import "./ProfileStyles.css"

//Services
import UserService from "../../../../../services/userServices/UserService"
import UserActivityService from "../../../../../services/userServices/UserActivitiesService"
import ProfileData from "./components/ProfileData/ProfileData";

//Components
const UserPhoto = lazy(()=>import("./components/UserPhoto/UserPhoto"))
const UserActivityComponent = lazy(()=>import("./components/UserActivity/UserActivity"))
const UserFeed = lazy(()=>import("./components/UserFeed/UserFeed"))

export default class Profile extends Component{
  
  constructor(props){
    super(props);

    this.state = { 
      currentUserDataIndex: 2
    };

    this.userService = new UserService();

    this.changeCurrentUserData = this.changeCurrentUserData.bind(this);
  }

  changeCurrentUserData(newUserDataIndex){
    this.setState({ 
      currentUserDataIndex: newUserDataIndex
    });
  }

  render(){
    return (
      <div id = "profileContainer">
        <div id = "userPhotoCont">
            <UserPhoto changeUserData = {this.changeCurrentUserData} />
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
