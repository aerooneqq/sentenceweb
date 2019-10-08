import React, {Component} from "react";

//Styles
import "./UserPhotoStyles.css";

//Icons
import careerIcon from "./img/career_profile_data_item.svg";
import authorizationIcon from "./img/authorization_profile_data_item.svg";
import friendsIcon from "./img/friends_profile_data_item.svg"; 
import locationIcon from "./img/location_profile_data_item.svg";
import nameIcon from "./img/name_profile_data_item.svg";

//Services
import { alertAppMessage } from "../../../../../../ApplicationMessage/ApplicationMessageManager";
import ResponseService from "../../../../../../../services/ResponseService/ReponseService";
import UserPhotoService from "../../../../../../../services/UserPhotoService/UserPhotoService";

//Components
import Loader from "../../../../../../loader/Loader";
import UserPhotoLoader from "./UserPhotoLoader/UserPhotoLoader";
import ProfileDataItem from "./ProfileDataItem/ProfileDataItem";
import SignOutComponent from "./SignOut/SignOut";
import DeleteAccountComponent from "./DeleteAccount/DeleteAccount";
import AccountVerification from "./AccountVerification/AccountVerification";

/**
 * PROPS LIST:
 * 1) changeUserData - the function to change the currently displayed data.
 * 2) signOut  - the function to sign out from the system
 */
export default class UserPhoto extends Component {
  _icons = [careerIcon, authorizationIcon, nameIcon, locationIcon, friendsIcon];
  _toolTips = ["Career", "Authentication", "Name", "Location", "Subscribers and subscriptions"];

  constructor(props) {
    super(props);

    this.userPhotoService = new UserPhotoService(localStorage.getItem("token"));
    this.responseService = new ResponseService();

    let profileDataItems = [];

    for (let i = 0; i < 5; i++){ 
      let props = { 
        imgURL: careerIcon,
        currentUserData: i,
        changeUserData: this.props.changeUserData,

      }

      profileDataItems.push(<ProfileDataItem data = {props} 
                                             icon = {this._icons[i]}
                                             toolTip = {this._toolTips[i]}/>);
    }

    this.state = { 
      profileDataItems: profileDataItems,
      isPhotoUpdating: true,
      isFirstLoad: true,
      userPhoto: null
    }

    this.updateUserPhoto = this.updateUserPhoto.bind(this);
    this.uploadUserPhoto = this.uploadUserPhoto.bind(this);
  }

  componentDidMount() { 
    this.uploadUserPhoto();
  }

  uploadUserPhoto() { 
    this.userPhotoService.getUserPhoto().then(res => { 
      this.setState({ 
        isPhotoUpdating: false,
        isFirstLoad: false,
        userPhoto: res.data.photo
      });

      document.getElementById("userPhotoImg").src = `data:image/png;base64, ${this.state.userPhoto}`
    }).catch(er => { 
      this.setState({ 
        isPhotoUpdating: false,
        isFirstLoad: false,
      });
      this.responseService.alertErrorMessage(er, "Error occured while getting photo.");
    });
  }

  updateUserPhoto() { 
    let input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png,image/gif";

    input.onchange = e => { 
      let file = e.target.files[0];

      let reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = e => { 
        let array = new Uint8Array(e.target.result);
        
        let byteArray = []

        for (let i = 0; i < array.length; i++) { 
          byteArray.push(array[i]);
        }

        this.setState({ 
          isPhotoUpdating: true
        });

        this.userPhotoService.updateUserPhoto(byteArray).then(() => { 
          alertAppMessage("The profile photo was updated!", "success");
          this.setState({ 
            isPhotoUpdating: false
          });
        }).catch(er => { 
          this.responseService.alertErrorMessage(er, "The error occured when updating the photo");
          this.setState({ 
            isPhotoUpdating: false
          });
        });
      }
    }

    input.click();
  }

  render() {
      return (
        <div id="photoContainer">
          
          {this.state.isFirstLoad === true ? <UserPhotoLoader /> :
              <div className = "userPhotoAndSettingsCont">
                <div className = "userPhotoTopSettings">
                  <SignOutComponent signOut = {this.props.signOut}/>
                  <div className = "fillContainer" />
                  <DeleteAccountComponent />
                </div>
      
                <div id="photoBorder">
                  {this.state.isPhotoUpdating === true ? <Loader message = "Updating the photo..."/> : 
                  <div>
                    <img id = "userPhotoImg" alt = "Profile" />
                    <div id ="uploadNewUserPhotoContainer" onClick = {this.updateUserPhoto}>
                      <div id="uploadNewUserPhotoImg"></div>
                    </div> 
                  </div>}
      
                </div>
                <div id="profileDataItemsContainer">
                  {this.state.profileDataItems}
                </div>
              </div>
          }
          <AccountVerification />
        </div>
      )
  }
}
