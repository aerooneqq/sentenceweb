import React, {Component} from "react"

//Styles
import "../styles/MenuItemStyles.css"

export default class MenuItem extends Component{
  constructor(props){
    super(props)

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
  }

  /**
   * Changes the main component of a workplace, by calling the method
   * from WorkplaceComponent class.
   */
  handleMenuItemClick(){
    this.props.changeWorkplaceComponent(this.props.menuItem.id)
  }

  render(){
    return(
      <div className="workplaceHeaderMenuItem"
           onClick = {this.handleMenuItemClick} >
        {this.props.menuItem.name}
      </div>
    )
  }
}
