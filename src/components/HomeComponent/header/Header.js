import React, {Component, lazy, Suspense} from "react";

//Styles
import "./HeaderStyles.css";
import Loader from "../../loader/Loader";

//Components
const VerticalSeparator = lazy(() => import("./VerticalSeparator/VerticalSeparator"));
const HeaderTitle = lazy(() => import("./HeaderTitle/HeaderTitle"));
const HeaderMenuBtn = lazy(() => import("./HeaderMenuBtn/HeaderMenuBtn"));
const HeaderMenuOptions = lazy(() => import("./HeaderMenuOptions/HeaderMenuOptions"));

export default class Header extends Component {

    /**
     * This function is called when the menu button in the mobile mode is pressed
     * @param {*} isClosed Determines whether the menu in a mobile mode closed or not 
     */
    showOrHideMenuItems(isClosed) { 
      let container = document.getElementById("menuOptionsContainer")

      if (isClosed) { 
        container.classList.remove("hideMenuAnimation");
        container.classList.toggle("showMenuAnimation");
      }
      else { 
        container.classList.remove("showMenuAnimation");
        container.classList.toggle("hideMenuAnimation");
      }
    }
    
    render() {
        return (
            <div id = "headerOutterContainer">
              <div id = "headerInnerContainer">
                <div id = "headerLeftPart">
                  <div id="titleContainer">
                    <HeaderTitle />
                    <VerticalSeparator />
                  </div>
                  <div id = "headerMiddleContaier" />
                  <HeaderMenuBtn showOrHideMenuItems = {this.showOrHideMenuItems}/>
                </div>
                <HeaderMenuOptions />
              </div>
            </div>
        );
    }
}