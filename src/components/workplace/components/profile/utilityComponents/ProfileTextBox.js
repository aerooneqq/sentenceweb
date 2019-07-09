import React, {Component} from "react"
import "../styles/ProfileTextBoxStyles.css"

export default class TextBox extends Component{
  constructor(props){
    super(props);

    this.state={
      value: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({
      value: event.target.value
    });
  }

  render(){
    return(
      <div className = "profiletextBoxCont">
        <div className = "propertyNameText">Property name</div>
        <input className = "propertyValueInput" type = "text" value={this.state.value} onChange={this.onInputChange}></input>
      </div>
    )
  }
}
