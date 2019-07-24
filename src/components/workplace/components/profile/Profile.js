import React, {Component, Suspense, lazy} from "react"
import "./ProfileStyles.css"

//Services
import UserService from "../../../../services/users/UserService"
import UserActivityService from "../../../../services/userActivitiesService/UserActivitiesService"

//Components
const UserPhoto = lazy(()=>import("./components/UserPhoto"))
const SignOutComponent = lazy(()=>import("./components/userPhotoAtoms/SignOutComponent"))
const DeleteAccountComponent = lazy(()=>import("./components/userPhotoAtoms/DeleteAccountComponent"))
const ProfileDataComponent = lazy(()=>import("./components/ProfileDataComponent"))
const UserActivityComponent = lazy(()=>import("./components/UserActivityComponent"))
const Loader = lazy(()=>import("../../../loader/Loader"))
const UserFeed = lazy(()=>import("./components/UserFeed"))


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
  }

  changeCurrentUserData(newUserData){
    this.setState({ 
      currentUserData: newUserData
    });
  }

  componentDidMount(){ 
    this.userService.getUser(localStorage.getItem("token")).then(res =>{ 
      alert(res.data["email"])
      this.setState({ 
        user: res.data
      });
    }).catch(er => alert(er))
  }

  render(){
    return (
      <div id = "profileContainer">
        <div id = "userPhotoCont" className="profileShadowContainer">
            <Suspense fallback = {<Loader />}>
              <UserPhoto changeUserData = {this.changeCurrentUserData}  user = {this.state.user}/>
            </Suspense>
        </div>

        <div id = "profileDataCont" className="profileShadowContainer">
          <Suspense fallback = {<Loader />}>
            <ProfileDataComponent currentUserData = {this.state.currentUserData} user = {this.state.user}/>
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
