import React from "react"

//Styles
import "./AuthenticationTopBarStyles.css"

/**
 * This is the top bar of the registration/authentication component
 * 
 * PROPS LIST:
 * 1) mode - the mode of registration components (either signIn, signOut)
 */
export default class AuthenticationTopBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleSliderClick = this.handleSliderClick.bind(this);
    }

    /**
     * Handles the slide click by invoking the fucntion which comes from
     * Authentication component which changes the "sign" mode (from "signIn" to "signUp" 
     * and vice versa)
     */
    handleSliderClick() {
      this.props.changeSignMode();
    }

    render() {
        return (
            <div id="authenticationTopBarContainer">
              <div id="authSlider" onClick={this.handleSliderClick}
                  className={this.props.mode === "signIn" ? "movingLeftSlider" :"movingRightSlider" }>
                      {this.props.mode === "signIn" ? "Sign in" : "Sign up"}
              </div>
            </div>
        )
    }
}
