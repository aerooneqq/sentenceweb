import React, {Component} from "react";

//Styles
import "./ParagraphTextStyles.css" 

//Components
import ContentEditableSpan from "../../../../../../../../../ContentEditable/ContentEditableSpan";


export default class ParagraphText extends Component { 
    constructor(props) { 
        super(props);

        this.handleEditableChange = this.handleEditableChange.bind(this);
    }

    handleEditableChange(text) { 
        this.props.changeText(text);
    }

    render() { 
        return ( 
            <div className = "paragraphTextOutterCont">
                <ContentEditableSpan text = {this.props.text} 
                                     color = {"black"}
                                     fontSize = {"18px"}
                                     onChange = {this.handleEditableChange}/>
            </div>
        )
    }
}