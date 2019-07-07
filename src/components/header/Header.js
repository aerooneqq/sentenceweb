import React from "react"

import HeaderTitle from "./utilityComponents/HeaderTitle";
import VerticalSeparator from "./utilityComponents/VerticalSeparator";
import HeaderMenuItem from "./utilityComponents/HeaderMenuItem";
import DeviceContext from "../../contexts/DeviceContext.js"
import "./styles/HeaderStyles.css"

export default class Header extends React.Component {
    static contextType = DeviceContext

    menuOptionsModels = [{ ID: 0, Name: "About", Href: "" },
        { ID: 1, Name: "Examples", Href: "" }, { ID: 2, Name: "Try", Href: "" },
        { ID: 3, Name: "Contacts", Href: "" }]

    render() {
        let headerStyle = this.getHeaderContainerStyle()

        const jsxMenuOptions = this.getMenuOptionsList()

        return (
            <div style={headerStyle}>
              <div id = "leftHeaderPart">
                <div id="titleContainer">
                  <HeaderTitle />
                  <VerticalSeparator />
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

    getHeaderContainerStyle() {
        return {
            width: this.context === "mobile" ? "100%" : "80%",
            height: this.context == "mobile" ? "80px" : "70px",
            backgroundColor: "#000000",

            display: "flex",
            flexDirection: this.context == "mobile" ? "column" : "row",
            alignItems: "center",

            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: this.context == "mobile" ? "15px" : "0px"
        }
    }
}
