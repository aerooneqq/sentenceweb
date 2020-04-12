import React, {Component} from "react";

import "./SingleInput.css";

export default class SingleInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value ? props.value : ""
        }

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(event) {
        this.setState({
            value: event.target.value
        });

        this.props.changeUserValue(this.props.title, event.target.value);
    }

    render() {
        return (
            <div className = "single-input-container">
                <div className = "single-input-title">
                    {this.props.title}
                </div>
                <input className = "single-input-input" type = "text" 
                       value = {this.state.value} onChange = {this.handleValueChange} />
            </div>
        )
    }
}