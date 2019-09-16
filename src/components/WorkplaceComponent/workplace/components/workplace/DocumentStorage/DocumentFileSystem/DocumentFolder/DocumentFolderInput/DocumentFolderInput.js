import React, {Component} from "react";

//Styles
import "./DocumentFolderInputStyles.css";
import FolderService from "../../../../../../../../../services/FileSystemService/FolderService";
import ResponseService from "../../../../../../../../../services/ResponseService/ReponseService";

/**
 * This is the dummy component which stores the name of the folder.
 * This component is fully controlled by the DocumentFolderComponent
 * 
 * PROPS LIST:
 * 1) isEnabled
 * 2) makeInputDisabledAndRename
 * 3) value
 * 4) onInputValueChange
 * 5) id
 */
export default class DocumentFolderInput extends Component { 

    constructor(props) {
        super(props);

        this.state = { 
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
        this.props.onInputValueChange(event);
    }

    render() { 
        return (
            <input type = "text" 
                   id = {this.state.id}
                   className = "documentFolderInput" 
                   value = {this.props.value} 
                   disabled = {this.props.isEnabled === true ? null : "true"}
                   onChange = {this.handleInputValueChange}
                   onBlur = {this.props.makeInputDisabledAndRename}>
            </input>
        )
    }

}