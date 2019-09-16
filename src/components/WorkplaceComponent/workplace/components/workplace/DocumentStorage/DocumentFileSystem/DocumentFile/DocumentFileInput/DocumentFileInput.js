import React, {Component} from "react";

import "./DocumentFileInputStyles.css";

export default class DocumentFileInput extends Component { 
    constructor(props) { 
        super(props);

        this.inputID = `documentFileInput${props.id}`
    }

    componentDidUpdate() { 
        if (this.props.isEnabled === true) { 
            document.getElementById(this.inputID).focus();
        }
    }

    render() { 
        return ( 
            <input type = "text" 
                   id = {this.inputID}
                   className = "documentFileInput" 
                   value = {this.props.value} 
                   disabled = {this.props.isEnabled === true ? null : "true"}
                   onChange = {this.props.onInputValueChange}
                   onBlur = {this.props.makeInputDisabledAndRename}>
            </input>
        )
    }
}