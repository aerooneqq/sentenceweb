import React, {Component, lazy} from "react"

//Styles
import "./AuthorizationStyles.css"

//App message
import {alertAppMessage} from "../../../ApplicationMessage/ApplicationMessageManager";

//Components
const Loader = lazy(()=>import("../../../loader/Loader"))

export default class Authorization extends Component {
    constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: "",
          isAuthorizing: false
        };

        this.handleEmailInputChange = this.handleEmailInputChange.bind(this)
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this)
        this.handleSignIn = this.handleSignIn.bind(this);
        this.onPasswordInputKeyDown = this.onPasswordInputKeyDown.bind(this);
    }

    componentDidMount() {
      var authCont = document.getElementById("signInInputContainer")
      authCont.classList.toggle("authContentRotationThreeD")
    }

    handleEmailInputChange(event) {
      this.setState({
        email: event.target.value
      })
    }

    handlePasswordInputChange(event) {
      this.setState({
        password: event.target.value
      })
    }

    onPasswordInputKeyDown(event) {
      if (event.keyCode === 13) { 
        this.handleSignIn();
      }
    }
    
    handleSignIn() {
      let email = this.state.email;
      let password = this.state.password;

      this.setState({
        isAuthorizing: true
      });

      this.props.signIn(email, password).catch(() => { 
        this.setState({
          isAuthorizing: false
        });
      })
    }

    render() {
        if (this.state.isAuthorizing) { 
          return(
            <div id = "authorizationLoaderCont">
              <Loader />
            </div>
          )
        }
        else{ 
          return (
            <div id='signInInputContainer'>
              <div className="inputPropContainer">
                <p className="inputNameText">E-mail</p>
                <input type='text'
                       value={this.state.email} 
                       id="inputEmail" 
                       className="authInput"
                       onChange={this.handleEmailInputChange}/>
              </div>
              <div className = "inputPropContainer">
                <p className = "inputNameText">Password</p>
                <input type = 'password' 
                       value = {this.state.password} 
                       id = 'inputPassword'
                       className = "authInput"
                       onChange = {this.handlePasswordInputChange}
                       onKeyDown = {this.onPasswordInputKeyDown}/>
              </div>
              <div id="btnContainer">
                <p>Forgot your password?</p>
                <button id="signInBtn" onClick={this.handleSignIn}>Sign in</button>
              </div>
            </div>
         );
        }
    }
}
