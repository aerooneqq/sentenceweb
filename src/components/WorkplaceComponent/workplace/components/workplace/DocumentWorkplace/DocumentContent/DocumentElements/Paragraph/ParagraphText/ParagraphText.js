import React, {Component} from "react";

//Styles
import "./ParagraphTextStyles.css" 

//Components
import ContentEditableDiv from "../../CommonComponents/ContentEditable/ContentEditableDiv";


export default class ParagraphText extends Component { 
    constructor(props) { 
        super(props);

        this.handleEditableChange = this.handleEditableChange.bind(this);
    }

    handleEditableChange(event) { 
        this.props.changeCurrentText(event);
    }

    render() { 
        return ( 
            <div className = "paragraphTextOutterCont">
                <ContentEditableDiv text = {this.props.value} 
                                    onChagne = {this.handleEditableChange}/>
            </div>
        )
    }
}