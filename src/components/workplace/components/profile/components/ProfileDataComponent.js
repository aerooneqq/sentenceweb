import React, {Component, lazy} from "react"
import "./styles/ProfileDataContStyles.css"

const ProfileTextBox = lazy(()=>import("./profileDataAtoms/ProfileTextBox"))
const ProfileDataHeader = lazy(()=>import("./profileDataAtoms/ProfileDataHeader"))
const SaveChangesComp = lazy(()=>import("./profileDataAtoms/SaveChangesComponent"))
const DiscardChangesComponent = lazy(()=>import("./profileDataAtoms/DiscardCahangesComponent"))


export default class ProfileDataComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id = "profileDataContainer">
        <div id = "profileDataHeaderCont">
          <ProfileDataHeader dataName = "Career info"/>
        </div>

        <div id = "profileDataContentCont">
          <div className="textBlock">          
            <ProfileTextBox />
          </div>
          <div className="textBlock">          
            <ProfileTextBox />
          </div>
          <div className="textBlock">          
            <ProfileTextBox />
          </div>
        </div>

        <div id = "saveOrDiscardBlock">
          <div id = "saveCont">
              <SaveChangesComp />
            </div>

            <div id = "discardCont">
              <DiscardChangesComponent />
            </div>
        </div>
      </div>
    )
  }
}
