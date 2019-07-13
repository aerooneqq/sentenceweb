import React, {Component} from "react"
import "./styles/ProfileDataItem.css"

export default class ProfileDataItem extends Component{
  constructor(props){
    super(props)

    this.state = { 
      imgURL: this.props.imgURL
    }
  }

  render(){
    return(
      <div className = "profileDataItem">
        <img src = {this.state.imgURL} className = "profileDataItemImg">
        </img>
      </div>
    )
  }
}
