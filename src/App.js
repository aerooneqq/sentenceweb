import React, {Component, Suspense} from "react"
import HomeComponent from "./components/mainComponents/HomeComponent"
import WorkplaceComponent from "./components/mainComponents/WorkplaceComponent"

import TokenService from "./services/tokens/TokenService";
import device from "./scripts/device.js"
import DeviceContext from "./contexts/DeviceContext.js"
import Loader from "./components/loader/Loader"

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userLoggedIn: false,
      user: null
    };

    this.signIn = this.signIn.bind(this);
  }

  getDevice(){
    if (device.mobile()){
      return "mobile";
    }

    return "desktop";
  }

  async signIn(email, password){ 
    let userService = new TokenService();
    let token = await userService.sendGetTokenRequest(email, password);
    
    if (token != null){ 
      localStorage.removeItem("token");
      localStorage.setItem("token", token);

      this.setState({
        userLoggedIn: true
      });
    }
  }

  render() {
    let device = this.getDevice();

    let homeComponent = ( 
      <HomeComponent signIn = {this.signIn}/>
    )

    return(
      <DeviceContext.Provider value = {device}>
        <Suspense fallback = {<Loader />}>
          {this.state.userLoggedIn === true ? <WorkplaceComponent /> : 
           <WorkplaceComponent />}
        </Suspense>
      </DeviceContext.Provider>

    )
  }
}
