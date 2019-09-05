import React, {Component} from "react";

//Styles
import "./CareerStageInputStyles.css";

export default class CareerStageInput extends Component { 

    constructor(props) { 
        super(props);

        this.state = { 
            inputValue: props.value
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(event) { 
        this.setState({ 
            inputValue: event.target.value
        });

        this.props.updateCareerStage(this.props.propertyName, event.target.value);
    }

    render() {
        return ( 
            <div className = "careerStageInputCont">
                <input className = "careerStageInput"  style = {{
                    width: this.props.size === "small" ? 100 + "px" : "70%"
                }} onChange = {this.onValueChange} value = {this.state.inputValue}/>
                <div className = "careerStageInputHelper">
                    {this.props.helperText}
                </div>
            </div>
        )
    }
}