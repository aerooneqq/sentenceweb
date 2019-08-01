import React, {Component, lazy, Suspense} from "react";

//Styles
import "./ProfileDataContStyles.css";

//Components
const Loader = lazy(() => import("../../../../../../loader/Loader"));
const ProfileDataHeader = lazy(() => import("./profileDataAtoms/ProfileDataHeader/ProfileDataHeader"));
const SaveChangesComp = lazy(() => import("./profileDataAtoms/SaveChanges/SaveChanges"));
const DiscardChangesComponent = lazy(() => import("./profileDataAtoms/DiscardChanges/DiscardCahanges"));
const CareerData = lazy(() => import("./profileDataAtoms/CareerData/CareerData"));
const AuthProfileData = lazy(() => import("./profileDataAtoms/AuthProfileData/AuthProfileData"));
const NameData = lazy(() => import("./profileDataAtoms/NameData/NameData"));
const LocationData = lazy(() => import("./profileDataAtoms/LocationData/LocationData"));
const Friends = lazy(() => import("./profileDataAtoms/subscribersAndSubscriptions/Friends/Friends"));
const ProfileHeader = lazy(() => import("../ProfileHeader/ProfileHeader"));

export default class ProfileData extends Component {
  constructor(props){
    super(props);

    this.state = { 
      user: props.user,
      updatedUser: {},
      isUpdating: false,
      userFriendsMode: "subscribers"
    };

    this.changeUpdatedUser = this.changeUpdatedUser.bind(this);
    this.getProfileDataContent = this.getProfileDataContent.bind(this);
    this.discardChangesInProfileData = this.discardChangesInProfileData.bind(this);
    this.setUpdatingStatus = this.setUpdatingStatus.bind(this);
    this.changeUserFriendMode = this.changeUserFriendMode.bind(this);
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

  changeUserFriendMode(mode){ 
    this.setState({ 
      userFriendsMode: mode
    })
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
        return "Friends";
      default:
        return "";
    }
  }

  render() {
    let element = this.getProfileDataContent(this.props.currentUserData);

    if (this.props.user === null || this.state.isUpdating === true) { 
      return(
        <div id = "profileDataOutterContainer">
          <ProfileHeader header = "Settings"/>
          <div id = "profileDataContainer">
            <Loader />
          </div>  
        </div>
      )
    }
    else { 
      return(
          <div id = "profileDataOutterContainer">
            <ProfileHeader header = "Settings"/>
            <div id = "profileDataContainer">
              <Suspense fallback = {<Loader />}>
                  <div id = "profileDataHeaderCont">
                    <ProfileDataHeader dataName = {this.getDataName(this.props.currentUserData)}/>
                  </div>  
          
                  <div id = "profileDataContentCont">
                    {element}
                  </div>
              </Suspense>
            </div>
          </div>
      )
    }
  }
}
