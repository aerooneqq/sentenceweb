import React, {Component} from "react";

//Styles
import "./ParagraphTextStyles.css" 

//Components
import ContentEditableDiv from "../../CommonComponents/ContentEditable/ContentEditableDiv";


export default class ParagraphText extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            value: props.text
        }

        this.handleEditableChange = this.handleEditableChange.bind(this);
    }

    handleEditableChange(event) { 
        this.setState({
            value: event.target.value
        });
    }

    render() { 
        return ( 
            <div className = "paragraphTextOutterCont">
                <ContentEditableDiv text = {this.state.value} 
                                    onChagne = {this.handleEditableChange}
                                    setUserWorkingStatus = {this.props.setUserWorkingStatus} />
            </div>
        )
    }
}