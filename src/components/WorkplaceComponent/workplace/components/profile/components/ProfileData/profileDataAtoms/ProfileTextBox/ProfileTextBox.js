import React, {Component} from "react"

//Styles
import "./ProfileTextBoxStyles.css"

export default class ProfileTextBox extends Component{
  //The initial value of an input
  initValue = ""

  constructor(props){
    super(props);

    this.state={
      value: props.propertyValue
    };

    this.initValue = props.propertyValue;
    this.onInputChange = this.onInputChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){ 
      return { 
        value: nextProps.propertyValue
      };
  }

  onInputChange(event){
    let modelPropertyName = this.props.propertyName;
    modelPropertyName = modelPropertyName.charAt(0).toLowerCase() + modelPropertyName.substring(1);

    this.props.changeUpdatedUser(modelPropertyName, event.target.value);

    this.setState({
      value: event.target.value
    });
  }

  render(){
    return(
      <div className = "profiletextBoxCont">
        <div className = "propertyNameText">{this.props.propertyName}</div>
        <div className = "propertyDescription">{this.props.propertyDescription}</div>
        <input className = "propertyValueInput" type = "text" value={this.state.value} onChange={this.onInputChange}></input>
      </div>
    )
  }
}
