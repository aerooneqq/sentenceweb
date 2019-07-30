import React, {Component, lazy} from "react";

//Styles
import "./HeaderMenuOptionsStyles.css"

//Components
const HeaderMenuItem = lazy(() => import("../HeaderMenuItem/HeaderMenuItem"));

export default class HeaderMenuOptions extends Component{ 
    menuOptionsModels = [{ ID: 0, Name: "About", Href: "" },
    { ID: 1, Name: "Examples", Href: "" }, { ID: 2, Name: "Try", Href: "" },
    { ID: 3, Name: "Contacts", Href: "" }]

    constructor(props){ 
        super(props);
    }

    getMenuOptionsList() {
        let menuOptions = []

        for (var i = 0; i < this.menuOptionsModels.length; i++) {
            menuOptions.push(<HeaderMenuItem menuItem={this.menuOptionsModels[i]} />)
        }

        return menuOptions
    }

    render() { 
        let jsxMenuOptions = this.getMenuOptionsList();

        return ( 
            <div id="menuOptionsContainer">
                {jsxMenuOptions}
            </div>
        );
    }   
}