import React, {Component} from "react"
import "../styles/ProfileTextBoxStyles.css"

export default class TextBox extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className = "profiletextBoxCont">
        <p className = "propertyNameText">Property name</p>
        <input className = "propertyValueInput" type = "text" value="Property value"></input>
      </div>
    )
  }
}
