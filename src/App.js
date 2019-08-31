import React, {Component, Suspense, lazy} from "react"

import Loader from "./components/loader/Loader"

//Services
import TokenService from "./services/Tokens/TokenService";
import UserService from "./services/UserServices/UserService";

//Styles
import "./AppStyles.css";

//App messages
import ApplicationMessagesContainer from "./components/ApplicationMessage/ApplicationMessagesContainer";
import { alertAppMessage } from "./components/ApplicationMessage/ApplicationMessageManager";
import { resolve } from "url";

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
          <Loader message = "Loading..." />
        </div>
      ),
    };

    this.isTokenChecked = false;

    let userService = new UserService(localStorage.getItem("token"));

    //If we have not checked the token, we must check it and then upload
    //the component which is suitable for the result of authentication
    if (!this.checkedToken) {
      userService.getUser().then(result => {
        if (result.data == null) { 
          this.setState({ 
            userLoggedIn: false,
            component: <HomeComponent signIn = {this.signIn} />,
            checkToken: true,
          });
        } else { 
          this.setState({ 
            userLoggedIn: true,
            checkToken: true,
            component: <WorkplaceComponent />
          });
        }
      }).catch(er => { 
        this.setState({ 
          userLoggedIn: false,
          component: <HomeComponent signIn = {this.signIn} />,
          checkToken: true,
        });

      });

      this.isTokenChecked = true;
    }

    this.signIn = this.signIn.bind(this);
  }


  signIn(email, password) { 
    return new Promise((onResolved, onRejected) => { 
      let tokenService = new TokenService();
      tokenService.sendGetTokenRequest(email, password).then(res => { 
        let token = res.data;
  
        if (token != null){ 
          localStorage.removeItem("token");
          localStorage.setItem("token", token);
    
          this.setState({
            component: <WorkplaceComponent />
          });
        }

        onResolved();

      }).catch(() => {

        alertAppMessage("Error while authorizing", "error");
        onRejected();
        
      })
    })
  }

  render() {
    return(
      <Suspense fallback = {<Loader />} >
          <div style =  {{
            width: "100%",
            height: "100%"
          }}>
            <ApplicationMessagesContainer />
            {this.state.component}
          </div>
      </Suspense>
    )
  }
}