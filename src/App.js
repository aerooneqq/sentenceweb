import React, {Component, Suspense, lazy} from "react"

import Loader from "./components/loader/Loader"

//Services
import TokenService from "./services/tokens/TokenService";
import UserService from "./services/userServices/UserService";

//Styles
import "./appStyles.css";

//Components
const HomeComponent = lazy(() => import("./components/HomeComponent/HomeComponent"));
const WorkplaceComponent = lazy(() => import("./components/WorkplaceComponent/WorkplaceComponent"));

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
    return(
      <Suspense fallback = {<Loader />} >
          {this.state.component}
      </Suspense>
    )
  }
}