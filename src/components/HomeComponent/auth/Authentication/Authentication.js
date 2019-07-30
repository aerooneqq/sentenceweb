import React, {Suspense, lazy} from "react"

//Styles
import "./AuthenticationStyles.css"

//Components
const AuthenticationTopBar = lazy(() => import("../AuthenticationTopBar/AuthenticationTopBar"))
const Authorization = lazy(() => import("../Authorization/Authorization.js"))
const Registration = lazy(() => import("../Registration/Registration.js"))
const DeviceContext = lazy(() => import("../../../../contexts/DeviceContext"))

export default class Authentication extends React.Component {
    static contextType = DeviceContext

    constructor(props) {
        super(props)

        this.state = {
          mode: "signIn"
        }

        this.changeSignMode = this.changeSignMode.bind(this)
    }

    /**
     * Changes the mode of this component. 
     * The change comes from the AuthenticationTopBar component.
     * Mode can take two values: "signIn" and "signUp". When the change of the mode is performed,
     * the animation of card rotation is applied to the authentication block
     */
    changeSignMode() {
      document.getElementById("rotation").classList.toggle("rotate");

      this.setState(state => { 
        return { 
          mode: state.mode === "signIn" ? "signUp" : "signIn"
        };
      });
    }

    render() {
        return (
          <Suspense fallback = {<div>Loading...</div>}>
            <div id="authenticationContainer" class = "authenticationContainerSize">
                <AuthenticationTopBar mode = {this.state.mode}
                                      changeSignMode = {this.changeSignMode}/>
                <div id ="rotationContainer">
                  <div id="rotation">
                    <div id = "front">
                      <Authorization signIn = {this.props.signIn}/>
                    </div>
                    <div id = "back">
                      <Registration />
                    </div>
                  </div>
                </div>
            </div>
          </Suspense>
        )
    }
}
