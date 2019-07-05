import React from "react"
import "./AuthenticationTopBarStyles.css"

export default class AuthenticationTopBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          authSliderID: "authSlider"
        };

        this.handleSliderClick = this.handleSliderClick.bind(this);
    }

    handleSliderClick(){
      this.props.changeSignMode();
    }

    render() {
        return (
            <div id="authenticationTopBarContainer">
              <div id={this.state.authSliderID} onClick={this.handleSliderClick}
                  className={this.props.mode === "signIn" ? "movingLeftSlider" :"movingRightSlider" }>
                      {this.props.mode === "signIn" ? "Sign in" : "Sign up"}
              </div>
            </div>
        )
    }
}
