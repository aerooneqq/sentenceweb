import React, {Component} from "react"
import "./styles/ProfileDataItem.css"

export default class ProfileDataItem extends Component{
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){ 
    this.props.data.changeUserData(this.props.data.currentUserData)
  }

  render(){
    return(
      <div className = "profileDataItem" onClick={this.handleClick}>
        <img src = {this.props.data.imgURL} className = "profileDataItemImg">
        </img>
      </div>
    )
  }
}
