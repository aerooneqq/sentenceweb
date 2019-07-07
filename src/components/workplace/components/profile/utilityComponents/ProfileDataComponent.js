import React, {Component, lazy} from "react"

const ProfileTextBox = lazy(()=>import("./ProfileTextBox"))

export default class ProfileDataComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id = "profileDataContainer">
        <ProfileTextBox />
      </div>
    )
  }
}
