import React, {Component, Suspense, lazy} from "react"
import "./HeaderStyles.css"

//Components
import MenuItem from "./utilityComponents/MenuItem";
import FullScreenBtn from "./FullScreenBtn/FullScreenBtn";

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

    this._getMenuOptionsArray = this._getMenuOptionsArray.bind(this)
  }

  _getMenuOptionsArray() {
    let menuItems = []

    for (let i = 0; i<menuItemModels.length; i++) {
      menuItems.push(<MenuItem menuItem = {menuItemModels[i]}
                               key = {i}
                               changeWorkplaceComponent = {this.props.changeWorkplaceComponent} />)
    }

    return menuItems
  }

  render() {
    return (
      <div id = "header">
        <div id = "menuItemsContainer">
          {this._getMenuOptionsArray()}
        </div>
        <div id = "topButtons"> 
          <FullScreenBtn />
        </div>
      </div>
    )
  }
}
