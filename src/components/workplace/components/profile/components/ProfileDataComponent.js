import React, {Component, lazy} from "react";
import "./styles/ProfileDataContStyles.css";
import Loader from "../../../../loader/Loader";


const ProfileDataHeader = lazy(()=>import("./profileDataAtoms/ProfileDataHeader"));
const SaveChangesComp = lazy(()=>import("./profileDataAtoms/SaveChangesComponent"));
const DiscardChangesComponent = lazy(()=>import("./profileDataAtoms/DiscardCahangesComponent"));

const CareerData = lazy(()=>import("./profileDataAtoms/CareerData"));
const AuthProfileData = lazy(()=>import("./profileDataAtoms/AuthProfileData"));
const NameData = lazy(() => import("./profileDataAtoms/NameData"));
const LocationData = lazy(() => import("./profileDataAtoms/LocationData"));

export default class ProfileDataComponent extends Component{
  constructor(props){
    super(props);

    this.getProfileDataContent = this.getProfileDataContent.bind(this);
  }

  getProfileDataContent(index){ 
    switch (index){ 
      case 0:
        return <CareerData user = {this.props.user} />
      case 1:
        return <AuthProfileData user = {this.props.user} />
      case 2:
        return <NameData user = {this.props.user} />
      case 3:
        return <LocationData user = {this.props.user} />
      case 4: 
        return <LocationData user = {this.props.user} />
    }
  }

  render(){
    let element = this.getProfileDataContent(this.props.currentUserData);

    if (this.props.user === null){ 
      return(
        <div id = "profileDataLoaderContainer">
          <Loader />
        </div>
      )
    }
    else { 
      return(
        <div id = "profileDataContainer">
          <div id = "profileDataHeaderCont">
            <ProfileDataHeader dataName = "Career info"/>
          </div>  
  
          <div id = "profileDataContentCont">
            {element}
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
}
