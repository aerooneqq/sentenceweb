import React, {Component, Suspense, lazy} from "react"
import "./ProfileStyles.css"

const UserPhoto = lazy(()=>import("./components/UserPhoto"))
const SignOutComponent = lazy(()=>import("./components/userPhotoAtoms/SignOutComponent"))
const DeleteAccountComponent = lazy(()=>import("./components/userPhotoAtoms/DeleteAccountComponent"))
const ProfileDataComponent = lazy(()=>import("./components/ProfileDataComponent"))
const UserActivityComponent = lazy(()=>import("./components/UserActivityComponent"))
const ActivityHeader = lazy(()=>import("./components/userActivityAtoms/ActivityHeader"))
const Loader = lazy(() => import("../../../loader/Loader"))
const UserFeed = lazy(()=>import("./components/UserFeed"))


export default class Profile extends Component{
  constructor(){
    super()

    this.state = { 
      currentUserData: 2
    }

    this.changeCurrentUserData = this.changeCurrentUserData.bind(this)
  }

  changeCurrentUserData(newUserData){
    this.setState({ 
      currentUserData: newUserData
    })
  }

  render(){
    return (
      <div id = "profileContainer">
        <div id = "userPhotoCont" className="profileShadowContainer">
          <div id = "innerContainer">
            <Suspense fallback = {<Loader />}>
              <UserPhoto changeUserData = {this.changeCurrentUserData}/>
              <SignOutComponent />
              <DeleteAccountComponent />
            </Suspense>
          </div>
        </div>

        <div id = "profileDataCont" className="profileShadowContainer">
          <Suspense fallback = {<Loader />}>
            <ProfileDataComponent currentUserData = {this.state.currentUserData}/>
          </Suspense>
        </div>

        <div>
          <div id = "userActivityContainer">
            <UserActivityComponent />
          </div>
          <UserFeed />
        </div>
      </div>
    )
  }
}
