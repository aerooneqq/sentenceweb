import React, {Component, Suspense, lazy} from "react"
import "./styles/HeaderStyles.css"

const MenuItem = lazy(()=>import("./utilityComponents/MenuItem"))

const menuItemModels = [{id: 0, name: "Profile"}, {id: 1, name: "Templates"},
  {id: 2, name: "Projects"}]

export default class Header extends Component{
  constructor(){
    super()
  }

  render(){
    let menuItems = this.getMenuOptionsArray();

    return(
      <div id = "header">
        <div id = "menuItemsContainer">
          {menuItems}
        </div>
      </div>
    )
  }

  getMenuOptionsArray(){
    let menuItems = []

    for (let i = 0; i<menuItemModels.length; i++){
      menuItems.push(<MenuItem menuItem = {menuItemModels[i]} />)
    }

    return menuItems
  }
}
