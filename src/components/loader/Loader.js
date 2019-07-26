import React, {Component} from "react"
import "./LoaderStyles.css"

export default class Loader extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        return(
            <div className = "loaderCont">
                <div className = "ring"> 
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className = "loaderMessageCont">
                    {this.props.message}   
                </div>
            </div>
        )
    }
}