import React, {Component} from "react"

//Styles
import "../styles/MenuItemStyles.css"

/**
 * PROPS LIST: 
 * 1) menuItem - the object which represents the menu item.
 * 2) changeWorkplaceComponent - the function to change the workplace component
 */
export default class MenuItem extends Component{
  constructor(props) {
    super(props)

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
  }

  /**
   * Changes the main component of a workplace, by calling the method
   * from WorkplaceComponent class.
   */
  handleMenuItemClick() {
    if (this.props.changeWorkplaceComponent)
      this.props.changeWorkplaceComponent(this.props.menuItem.id)
  }

  render() {
    return (
      <div className="workplaceHeaderMenuItem" onClick = {this.handleMenuItemClick} >
        {this.props.menuItem ? this.props.menuItem.name : ""}
      </div>
    )
  }
}
