import React, {Component} from "react";

//Styles
import "./DocumentFolderInputStyles.css";

export default class DocumentFolderInput extends Component { 

    constructor(props) {
        super(props);

        this.state = { 
            value: props.value,
            id: "documentFolderInput" + props.id
        }

        this.handleInputValueChange = this.handleInputValueChange.bind(this);
    }

    componentDidUpdate() { 
        if (this.props.isEnabled === true) { 
            document.getElementById(this.state.id).focus();
        }
    }

    handleInputValueChange(event) { 
        this.setState({ 
            value: event.target.value
        });
    }

    render() { 
        return (
            <input type = "text" 
                   id = {this.state.id}
                   className = "documentFolderInput" 
                   value = {this.state.value} 
                   disabled = {this.props.isEnabled === true ? null : "true"}
                   onChange = {this.handleInputValueChange}
                   onBlur = {this.props.makeInputDisabled}>
            </input>
        )
    }

}