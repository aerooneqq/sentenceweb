import React, {Component} from "react"

//Styles
import "../styles/MenuItemStyles.css"

export default class MenuItem extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div class="workplaceHeaderMenuItem">
        {this.props.menuItem.name}
      </div>
    )
  }
}
