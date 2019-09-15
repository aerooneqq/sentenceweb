import React, {Component} from "react"

//Styles
import "./LoaderStyles.css"

export default class Loader extends Component{ 
    constructor(props){ 
        super(props)

        this.ringDivStyle = { 
            width: props.innerWidth ? props.innerWidth : "51px",
            height: props.innerWidth ? props.innerWidth : "51px" ,
        }

        this.ringStyle = { 
            width: props.outterWidth ? props.outterWidth : "64px",
            height: props.outterWidth ? props.outterWidth : "64px",
        }
    }

    render(){ 
        return (
            <div className = "loaderCont">
                <div className = "ring" style = {this.ringStyle}> 
                    <div style = {this.ringDivStyle}></div>
                    <div style = {this.ringDivStyle}></div>
                    <div style = {this.ringDivStyle}></div>
                    <div style = {this.ringDivStyle}></div>
                </div>
                <div className = "loaderMessageCont">
                    {this.props.message}   
                </div>
            </div>
        )
    }
}