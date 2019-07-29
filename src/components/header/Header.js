import React from "react"

import HeaderTitle from "./utilityComponents/HeaderTitle";
import VerticalSeparator from "./utilityComponents/VerticalSeparator";
import HeaderMenuItem from "./utilityComponents/HeaderMenuItem";
import "./styles/HeaderStyles.css"
import HeaderMenuBtn from "./utilityComponents/HeaderMenuBtn";

export default class Header extends React.Component {
    menuOptionsModels = [{ ID: 0, Name: "About", Href: "" },
        { ID: 1, Name: "Examples", Href: "" }, { ID: 2, Name: "Try", Href: "" },
        { ID: 3, Name: "Contacts", Href: "" }]

    render() {
        let jsxMenuOptions = this.getMenuOptionsList()
        
        return (
            <div id = "headerOutterContainer">
              <div id = "headerInnerContainer">
                <div id = "headerLeftPart">
                  <div id="titleContainer">
                    <HeaderTitle />
                    <VerticalSeparator />
                  </div>
                  <div id = "headerMiddleContaier" />
                  <HeaderMenuBtn />
                </div>
                <div id="menuOptionsContainer">
                  {jsxMenuOptions}
                </div>
              </div>
            </div>
        )
    }

    getMenuOptionsList() {
        let menuOptions = []

        for (var i = 0; i < this.menuOptionsModels.length; i++) {
            menuOptions.push(<HeaderMenuItem menuItem={this.menuOptionsModels[i]} />)
        }

        return menuOptions
    }
}
