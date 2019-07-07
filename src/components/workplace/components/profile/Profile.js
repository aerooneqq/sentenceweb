import React, {Component, Suspense, lazy} from "react"

const UserPhoto = lazy(()=>import("./utilityComponents/UserPhoto"))
const SignOutComponent = lazy(()=>import("./utilityComponents/SignOutComponent"))
const DeleteAccountComponent = lazy(()=>import("./utilityComponents/DeleteAccountComponent"))
const ProfileDataComponent = lazy(()=>import("./utilityComponents/ProfileDataComponent"))

export default class Profile extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div id = "profileContainer">
        <div id = "userPhotoComponent">
          <UserPhoto />
          <SignOutComponent />
          <DeleteAccountComponent />
        </div>
        <div id = "profileDataCont">
          <ProfileDataComponent />
        </div>
      </div>

    )
  }
}
