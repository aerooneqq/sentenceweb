import React, {Component} from "react";

//Styles
import "./ParagraphTextStyles.css" 

//Components
import ContentEditableDiv from "../../CommonComponents/ContentEditable/ContentEditableSpan";


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
                <ContentEditableDiv text = {this.props.text} 
                                    color = {"black"}
                                    fontSize = {"18px"}
                                    onChange = {this.handleEditableChange}/>
            </div>
        )
    }
}