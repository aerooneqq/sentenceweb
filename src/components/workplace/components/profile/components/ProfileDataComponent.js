import React, {Component, lazy} from "react";
import "./styles/ProfileDataContStyles.css";
import Loader from "../../../../loader/Loader";

const ProfileDataHeader = lazy(() => import("./profileDataAtoms/ProfileDataHeader"));
const SaveChangesComp = lazy(() => import("./profileDataAtoms/SaveChangesComponent"));
const DiscardChangesComponent = lazy(() => import("./profileDataAtoms/DiscardCahangesComponent"));

const CareerData = lazy(() => import("./profileDataAtoms/CareerData"));
const AuthProfileData = lazy(() => import("./profileDataAtoms/AuthProfileData"));
const NameData = lazy(() => import("./profileDataAtoms/NameData"));
const LocationData = lazy(() => import("./profileDataAtoms/LocationData"));
const Friends = lazy(() => import("./profileDataAtoms/subscribersAndSubscriptions/Friends"));

export default class ProfileDataComponent extends Component {
  constructor(props){
    super(props);

    this.state = { 
      user: props.user,
      updatedUser: {},
      isUpdating: false
    };

    this.changeUpdatedUser = this.changeUpdatedUser.bind(this);
    this.getProfileDataContent = this.getProfileDataContent.bind(this);
    this.discardChangesInProfileData = this.discardChangesInProfileData.bind(this);
    this.setUpdatingStatus = this.setUpdatingStatus.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) { 
    if (prevState !== null && prevState.user === null){
      let updatedUser = {}

      for (let key in nextProps.user){ 
        updatedUser[key] = nextProps.user[key]
      }
  
      return { 
        user: nextProps.user,
        updatedUser: updatedUser
      };
    }
  }

  setUpdatingStatus(status) { 
    this.setState({ 
      isUpdating: status
    });
  }

  discardChangesInProfileData() { 
    let newUpdatedUser = {};

    for (let key in this.state.user){ 
      newUpdatedUser[key] = this.state.user[key];
    }

    this.setState((state) => {
      return {
        updatedUser: newUpdatedUser
      }
    });
  }

  changeUpdatedUser(propertyName, value) {
    this.setState((state) => { 
      let user = state.updatedUser;
      
      let newUpdatedUser = {}
      for (let key in user){ 
        newUpdatedUser[key] = user[key];
      }
      newUpdatedUser[propertyName] = value;

      return {
        updatedUser: newUpdatedUser
      };
    })
  }

  getProfileDataContent(index) { 
    switch (index){ 
      case 0:
        return <CareerData user = {this.state.updatedUser} 
                           changeUpdatedUser = {this.changeUpdatedUser} />
      case 1:
        return <AuthProfileData user = {this.state.updatedUser}   
                                changeUpdatedUser = {this.changeUpdatedUser} />
      case 2:
        return <NameData user = {this.state.updatedUser} 
                        changeUpdatedUser = {this.changeUpdatedUser} />
      case 3:
        return <LocationData user = {this.state.updatedUser}
                             changeUpdatedUser = {this.changeUpdatedUser} />
      case 4: 
        return <Friends user = {this.state.updatedUser}
                        changeUpdatedUser = {this.changeUpdatedUser} />
      default:
        return null;
    }
  }

  getDataName(index) { 
    switch (index){ 
      case 0:
        return "Career";
      case 1:
        return "Authorization";
      case 2:
        return "Name";
      case 3:
        return "Location";
      case 4:
        return "Location";
      default:
        return "";
    }
  }

  render() {
    let element = this.getProfileDataContent(this.props.currentUserData);

    if (this.props.user === null || this.state.isUpdating === true) { 
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
            <ProfileDataHeader dataName = {this.getDataName(this.props.currentUserData)}/>
          </div>  
  
          <div id = "profileDataContentCont">
            {element}
          </div>
  
          <div id = "saveOrDiscardBlock">
            <div id = "saveCont">
                <SaveChangesComp updatedUser = {this.state.updatedUser}
                                 updateUser = {this.props.updateUser}
                                 setUpdatingStatus = {this.setUpdatingStatus}/>
            </div>

            <div id = "discardCont">
                <DiscardChangesComponent discardChangesInProfileData = {this.discardChangesInProfileData}/>
           </div>
          </div>
        </div>
      )
    }
  }
}
