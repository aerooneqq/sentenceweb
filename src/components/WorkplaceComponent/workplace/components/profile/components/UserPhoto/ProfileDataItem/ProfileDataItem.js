import React, {Component} from "react"

//Styles
import "./ProfileDataItemStyles.css"

export default class ProfileDataItem extends Component{
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() { 
    this.props.data.changeUserData(this.props.data.currentUserData)
  }

  render(){
    return(
      <div className = "profileDataItem" onClick={this.handleClick}>
        <img src = {this.props.icon} className = "profileDataItemImg" alt = "" />
      </div>
    )
  }
}
