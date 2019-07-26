import React, {Component, Suspense} from "react"
import HomeComponent from "./components/mainComponents/HomeComponent"
import WorkplaceComponent from "./components/mainComponents/WorkplaceComponent"

import DeviceContext from "./contexts/DeviceContext.js"
import Loader from "./components/loader/Loader"

//Services
import TokenService from "./services/tokens/TokenService";
import UserService from "./services/users/UserService";

//Device detection
import device from "./scripts/device.js"

//Styles
import "./appStyles.css";

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userLoggedIn: false,
      user: null,
      component: (
        <div id = "appLoaderContainer">
          <Loader />
        </div>
      ),
    };

    this.isTokenChecked = false;

    let userService = new UserService();
    let token = localStorage.getItem("token");

    //If we have not checked the token, we must check it and then upload
    //the component which is suitable for the result for authentication
    if (!this.checkedToken) {
      userService.getUser(token).then(result => {
        this.setState({ 
          userLoggedIn: true,
          checkToken: true,
          component: <WorkplaceComponent />
        });

        this.isTokenChecked = true;
      }).catch(er => { 
        this.setState({ 
          userLoggedIn: false,
          component: <HomeComponent signIn = {this.signIn} />,
          checkToken: true,
        });

        this.isTokenChecked = true;
      });
    }

    this.signIn = this.signIn.bind(this);
  }

  getDevice() {
    if (device.mobile()){
      return "mobile";
    }

    return "desktop";
  }

  async signIn(email, password) { 
    let tokenService = new TokenService();
    let token = await tokenService.sendGetTokenRequest(email, password);
    
    if (token != null){ 
      localStorage.removeItem("token");
      localStorage.setItem("token", token);

      this.setState({
        component: <WorkplaceComponent />
      });
    }
  }

  render() {
    let device = this.getDevice();

    return(
      <DeviceContext.Provider value = {device}>
        <Suspense fallback = {<Loader />}>
          {this.state.component}
        </Suspense>
      </DeviceContext.Provider>
    )
  }
}