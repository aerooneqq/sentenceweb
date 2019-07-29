import React, {Component} from "react"

//Styles
import "./ErrorStyles.css"

export default class Error extends Component{ 
    render(){ 
        return ( 
            <div id = "errorComponentOutter">
                <div id = "errorComponentInnerCont">
                    <div id = "errorTitleCont">Error</div>
                    <div id = "errorMessageCont">
                        {this.props.message}
                    </div>
                </div>
            </div>
        )
    }
} 