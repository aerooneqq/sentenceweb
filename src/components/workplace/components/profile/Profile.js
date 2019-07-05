import React, {Component, Suspense, lazy} from "react"

const UserPhoto = lazy(()=>import("./utilityComponents/UserPhoto"))
const SignOutComponent = lazy(()=>import("./utilityComponents/SignOutComponent"))
const DeleteAccountComponent = lazy(()=>import("./utilityComponents/DeleteAccountComponent"))

export default class Profile extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <UserPhoto />
        <SignOutComponent />
        <DeleteAccountComponent />
      </div>
    )
  }
}
