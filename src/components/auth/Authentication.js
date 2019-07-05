import React, {Suspense, lazy} from "react"
import "./AuthenticationStyles.css"

const AuthenticationTopBar = lazy(() => import("./AuthenticationTopBar"))
const Authorization = lazy(() => import("./Authorization.js"))
const Registration = lazy(() => import("./Registration.js"))
const DeviceContext = lazy(() => import("../../contexts/DeviceContext"))

export default class Authentication extends React.Component {
    static contextType = DeviceContext

    constructor(props) {
        super(props)

        this.state = {
          mode: "signIn"
        }

        this.changeSignMode = this.changeSignMode .bind(this)
    }

    changeSignMode(){
      let rotatableCont = document.getElementById("rotation")
      rotatableCont.classList.toggle("rotate")

      if (this.state.mode === "signIn"){
        this.setState({
          mode: "signUp"
        })
      }
      else {
        this.setState({
          mode: "signIn"
        })
      }
    }

    render() {
        return (
          <Suspense fallback = {<div>Loading...</div>}>
            <div id="authenticationContainer" className = {this.context === "mobile" ?
                  "mobileAuthenticationContainer" : "desktopAuthenticationContainer"}>
                <AuthenticationTopBar mode = {this.state.mode} changeSignMode
                    = {this.changeSignMode}/>

                <div id ="rotationContainer">
                  <div id="rotation">
                    <div id="front">
                      <Authorization/>
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
