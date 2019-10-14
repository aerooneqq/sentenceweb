import React, {Component, Suspense, lazy} from "react"
import "./HeaderStyles.css"

//Components
import MenuItem from "./utilityComponents/MenuItem";

const menuItemModels = [{id: 0, name: "Profile"}, {id: 1, name: "Workplace"},
  {id: 2, name: "Projects"}, {id: 3, name: "Templates"}]

/**
 * Header of the workplace component
 * 
 * PROPS LIST:
 * 1) changeWorkplaceComponent - the function to change the current component in the
 *    workplace component. 
 */
export default class Header extends Component {
  constructor(props) {
    super(props)

    this.getMenuOptionsArray = this.getMenuOptionsArray.bind(this)
  }

  render() {
    let menuItems = this.getMenuOptionsArray();

    return (
      <div id = "header">
        <div id = "menuItemsContainer">
          {menuItems}
        </div>
      </div>
    )
  }

  getMenuOptionsArray() {
    let menuItems = []

    for (let i = 0; i<menuItemModels.length; i++) {
      menuItems.push(<MenuItem menuItem = {menuItemModels[i]}
                               key = {i}
                               changeWorkplaceComponent = {this.props.changeWorkplaceComponent} />)
    }

    return menuItems
  }
}
