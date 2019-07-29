import React, {Component} from "react"

export default class Registration extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    document.getElementById("signUpInputContainer").classList.toggle("regContentRotationThreeD")
  }

  render(){
    return(
      <div id='signUpInputContainer'>
        <div className="inputPropContainer">
          <p className="inputNameText">E-mail</p>
          <input type='text' id="inputEmail" className="regInput"/>
        </div>
        <div className="inputPropContainer">
          <p className="inputNameText">Password</p>
          <input type='password' id='inputPassword' className="regInput"/>
        </div>
        <div className="inputPropContainer">
          <p className="inputNameText">Repeat password</p>
          <input type='password' id='inputPassword' className="regInput"/>
        </div>
        <div id="btnContainer">
          <button id="signUpBtn">Sign up</button>
          <p>By clicking the sign up btn u agree to freely give me all things u have</p>
        </div>
      </div>
    )
  }
}
