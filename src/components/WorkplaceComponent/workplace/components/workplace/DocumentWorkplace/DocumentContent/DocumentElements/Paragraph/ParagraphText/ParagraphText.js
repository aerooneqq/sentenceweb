import React, {Component} from "react";

//Styles
import "./ParagraphTextStyles.css" 

//Components
import ContentEditableDiv from "../../CommonComponents/ContentEditable/ContentEditableDiv";

const handleEditableChange = function(event) { 
    this.setState({
        value: event.target.value
    });
}

export default class ParagraphText extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            value: props.text
        }
    }

    render() { 
        return ( 
            <div className = "paragraphTextOutterCont">
                <ContentEditableDiv text = {this.state.value} onChagne = {handleEditableChange} />
            </div>
        )
    }
}