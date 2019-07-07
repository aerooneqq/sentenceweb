import React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HomeComponent from "./components/mainComponents/HomeComponent"
import WorkplaceComponent from "./components/mainComponents/WorkplaceComponent"

import device from "./scripts/device.js"
import DeviceContext from "./contexts/DeviceContext.js"

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      userLoggedIn: false,
      user: null
    };
  }

  getDevice(){
    if (device.mobile()){
      return "mobile"
    }

    return "desktop"
  }

  render() {
    let device = this.getDevice()
    let token = localStorage.getItem("token")

    return(
      <DeviceContext.Provider value = {device}>
        <BrowserRouter>
          <Route>
            <Switch>
              <Route exact path="/" component={token === null ? HomeComponent : HomeComponent}/>
            </Switch>
          </Route>
        </BrowserRouter>
      </DeviceContext.Provider>
    )
  }
}
