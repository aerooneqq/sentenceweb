import React, {Component} from "react"

//Styles
import "./ApplicationMessageStyles.css"

/**
 * This component is an application message, which is displayed in the right-down
 * cornrer. It can be either succes (green background) or error (red color)
 * 
 * PROPS LIST:
 * 1) message - the message to be displayed
 * 2) type - the type of application message (succeces or error)
 */
export default class ApplicationMessage extends Component{ 
    constructor(props) { 
        super(props);
        this._getMessageColorClass = this._getMessageColorClass.bind(this);
    }

    _getMessageColorClass() {
        switch (this.props.type) { 
            case "error":
                return "errorTitleContError"
            case "success":
                return "errorTitleContSuccess"
            default:
                return "errorTitleContDefault"
        }
    }

    render() { 
        return ( 
            <div style = {{bottom: 65 * this.props.number + 10 + "px"}}  id = "errorComponentOutter"
                    className = "appMessageFadeInOutAnimation">
                <div id = "errorComponentInnerCont">
                    <div class = {this._getMessageColorClass()} id = "errorTitleCont">
                        {this.props.message}
                    </div>  
                </div>
            </div>
        )
    }
} 