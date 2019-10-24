import React, {Component} from "react"

//Styles
import "./RegistrationStyles.css"

//Components
import Loader from "../../../loader/Loader";
import UserService from "../../../../services/UserServices/UserService";

//App messages
import {alertAppMessage} from "../../../ApplicationMessage/ApplicationMessageManager";


export default class Registration extends Component{
  constructor(props){
    super(props);

    this.state = { 
      isLoading: false,
      email: "",
      password: "",
      repeatedPassword: ""
    }

    this.handleRegistrationClick = this.handleRegistrationClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);
  }

  handleRegistrationClick() { 
    let userService = new UserService(localStorage.getItem("token"));

    let {email, password, repeatedPassword} = this.state;

    if (password !== repeatedPassword) { 
      alertAppMessage("The password nust be the same", "error");
    }
    else { 
      this.setState({ 
        isLoading: true
      });

      userService.createNewUser(email, password).then(() => {
        alertAppMessage("The account was successfully created!", "success");
      }).catch(error => { 
        alert(error);
        if (error.response) { 
          for (let errorMsg of error.response.data) { 
            alertAppMessage(errorMsg, "error");
          }
        }
      }).then(() => { 
        this.setState({ 
          isLoading: false
        });
      });
    }
  }

  handleEmailChange({target: { value }}) { 
    this.setState({ 
      email: value
    });
  }

  handlePasswordChange({target: { value }}) { 
    this.setState({ 
      password: value
    });
  }

  handleRepeatPasswordChange({target: { value }}) { 
    this.setState({ 
      repeatedPassword: value
    });
  }

  render(){
    if (this.state.isLoading === true) { 
      return ( 
        <div className = "registrationLoaderCont">
          <Loader />
        </div>
      )
    }

    return (
      <div id='signUpInputContainer' className ="regContentRotationThreeD">
        <div className="inputPropContainer">
          <p className="inputNameText">E-mail</p>
          <input type='text' id="inputEmail" className="regInput" onChange = {this.handleEmailChange}/>
        </div>
        <div className="inputPropContainer">
          <p className="inputNameText">Password</p>
          <input type='password' id='inputPassword' className="regInput" onChange = {this.handlePasswordChange}/>
        </div>
        <div className="inputPropContainer">
          <p className="inputNameText">Repeat password</p>
          <input type='password' id='inputPassword' className="regInput" onChange = {this.handleRepeatPasswordChange}/>
        </div>
        <div id="btnContainer">
          <button id="signUpBtn" onClick = {this.handleRegistrationClick}>  
            Sign up
          </button> 
          <p>By clicking the sign up btn u agree to freely give me all things u have</p>
        </div>
      </div>
    )
  }
}
