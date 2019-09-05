import React, {Component} from "react"

//Styles
import "./ApplicationMessageStyles.css"

export default class ApplicationMessage extends Component{ 
    constructor(props) { 
        super(props);

        this._getMessageColorStyle = this._getMessageColorStyle.bind(this);
    }

    _getMessageColorStyle() {
        let color = "";

        switch (this.props.type) { 
            case "error":
                color = "red";
                break;
            
            case "success":
                color = "green";
                break;

            default:
                color = "black";
                break;
        }

        return { 
            backgroundColor: color
        };
    }

    render() { 
        return ( 
            <div style = {{bottom: 65 * this.props.number + 10 + "px"}}  id = "errorComponentOutter"
                    className = "appMessageFadeInOutAnimation">
                <div id = "errorComponentInnerCont">
                    <div style = {this._getMessageColorStyle()} id = "errorTitleCont">
                        {this.props.message}
                    </div>
                </div>
            </div>
        )
    }
} 