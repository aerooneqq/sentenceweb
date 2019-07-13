import React, {Component, Suspense, lazy} from "react"
import "./ProfileStyles.css"

const UserPhoto = lazy(()=>import("./components/UserPhoto"))
const SignOutComponent = lazy(()=>import("./components/userPhotoAtoms/SignOutComponent"))
const DeleteAccountComponent = lazy(()=>import("./components/userPhotoAtoms/DeleteAccountComponent"))
const ProfileDataComponent = lazy(()=>import("./components/ProfileDataComponent"))
const UserActivityComponent = lazy(()=>import("./components/userActivityAtoms/UserActivityComponent"))
const ActivityHeader = lazy(()=>import("./components/userActivityAtoms/ActivityHeader"))


export default class Profile extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div id = "profileContainer">
        <div id = "userPhotoCont" className="profileContainer">
          <div id = "innerContainer">
            <UserPhoto />
            <SignOutComponent />
            <DeleteAccountComponent />
          </div>
        </div>

        <div id = "profileDataCont" className="profileContainer">
          <ProfileDataComponent />
        </div>

        <div>
          <ActivityHeader />
          <div id = "userActivityContainer" className="profileContainer">
            <UserActivityComponent />
          </div>
        </div>
      </div>
    )
  }
}
