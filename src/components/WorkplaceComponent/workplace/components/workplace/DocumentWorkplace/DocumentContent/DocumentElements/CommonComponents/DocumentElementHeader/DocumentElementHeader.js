import React, {Component} from "react";

//Styles
import "./DocumentElementHeaderStyles.css";
import ContentEditableDiv from "../ContentEditable/ContentEditableSpan";

/**
 * PROPS LIST: 
 * 1) headerText
 */
export default class DocumentElementHeader extends Component { 
    constructor(props) { 
        super(props);

        this.handleEditableChange = this.handleEditableChange.bind(this);
    }

    handleEditableChange(newName) { 
        this.props.changeName(newName);
    }

    render() { 
        return ( 
            <div className = "documentElementHeaderOutterCont">
                <div className = "documentElementHeaderInnerCont"> 
                    <ContentEditableDiv text = {this.props.name} 
                                        color = {"#999999"}
                                        fontSize = {"16px"}
                                        onChange = {this.handleEditableChange}/>
                </div>
            </div>
        )
    }
}