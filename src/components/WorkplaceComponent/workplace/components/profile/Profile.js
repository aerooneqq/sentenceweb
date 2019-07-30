import React, {Component, Suspense, lazy} from "react"
import "./ProfileStyles.css"

//Services
import UserService from "../../../../../services/userServices/UserService"
import UserActivityService from "../../../../../services/userServices/UserActivitiesService"

//Components
const UserPhoto = lazy(()=>import("./components/UserPhoto/UserPhoto"))
const ProfileDataComponent = lazy(()=>import("./components/ProfileData/ProfileData"))
const UserActivityComponent = lazy(()=>import("./components/UserActivity/UserActivity"))
const Loader = lazy(()=>import("../../../../loader/Loader"))
const UserFeed = lazy(()=>import("./components/UserFeed/UserFeed"))

export default class Profile extends Component{
  
  constructor(props){
    super(props);

    this.state = { 
      currentUserData: 2,
      user: null,
      userActivities: null
    };

    this.userService = new UserService();
    this.userActivityService = new UserActivityService();

    this.changeCurrentUserData = this.changeCurrentUserData.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user){ 
    let newUser = {};
    let newUpdatedUser = {};

    for (var key in user){ 
      newUser[key] = user[key];
      newUpdatedUser[key] = user[key];
    }

    this.setState({ 
      user: newUser,
      updatedUser: newUpdatedUser
    });
  }

  changeCurrentUserData(newUserData){
    this.setState({ 
      currentUserData: newUserData
    });
  }

  componentDidMount(){ 
    this.userService.getUser(localStorage.getItem("token")).then(res =>{ 
      this.setState({ 
        user: res.data,
        updatedUser: res.data
      });
    });
  }

  render(){
    return (
      <div id = "profileContainer">
        <div id = "userPhotoCont">
            <Suspense fallback = {<Loader />}>
              <UserPhoto changeUserData = {this.changeCurrentUserData}  
                         user = {this.state.user}/>
            </Suspense>
        </div>

        <div id = "profileDataCont">
          <Suspense fallback = {<Loader />}>
            <ProfileDataComponent currentUserData = {this.state.currentUserData} 
                                  user = {this.state.user}
                                  updateUser = {this.updateUser}/>
          </Suspense>
        </div>

        <div id = "userActivityOutterContainer">
          <div id = "userActivityContainer">
            <UserActivityComponent  getUserActivities = {this.getUserActivities}/>
          </div>
          <UserFeed />
        </div>
      </div>
    )
  }
}
