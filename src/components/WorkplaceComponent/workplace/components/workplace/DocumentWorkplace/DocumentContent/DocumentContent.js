import React, {Component} from "react"
import ReactDOM from "react-dom";
import {scrollY} from "../../../../../../../services/Utility/UtilityFunctions";

//Styles
import "./DocumentContentStyles.css"

//Components
import Paragraph from "./DocumentElements/Paragraph/Paragraph";
import Scrollbar from "../../../../../../Scrollbar/Scrollbar";
import { isHidden } from "../../../../../../../services/Utility/UtilityFunctions";

const paragraph = { 
    name: "Test name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin convallis sapien sed euismod. Ut vel sapien in justo placerat efficitur non at quam. Praesent suscipit vehicula libero quis eleifend. Suspendisse elementum, dolor vitae scelerisque accumsan, ipsum nunc consectetur arcu, vel interdum magna ipsum a enim. Nam eget dolor eget dolor consequat vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum rutrum mattis lorem, non sagittis enim efficitur vel. Sed eu dapibus metus. Vestibulum rhoncus, nunc at tristique mattis, magna ipsum mollis elit, et aliquam leo massa et erat. Phasellus porttitor nisl ac est fermentum tempor. Etiam nunc neque, interdum vitae dictum et, finibus quis lorem. Aliquam nec vestibulum orci, eget fermentum nunc. Aenean laoreet dui ac pulvinar luctus. Ut pellentesque est justo, non interdum orci fringilla rhoncus. Fusce pellentesque nulla metus, et lobortis felis condimentum vel. Pellentesque laoreet neque non maximus tincidunt.",
}

let outterScrollStyle = { 
    width: "10px",
    height: "100%",
    background: "#AAAAAA",
    "border-radius": "5px"
}

let thumbStyle = { 
    width: "10px",
    "border-radius": "5px",
    "background": "#909090"
}

export default class DocumentContent extends Component { 
    constructor(props) { 
        super(props);

        this.state = {}
    }

    render() { 
        return ( 
            <div id = "documentScrollCont">
                <div id = "documentContentOutterContainer">
                    <div id = "documentContentInnerContainer">
                        <Paragraph paragraph = {paragraph} />
                        <Paragraph paragraph = {paragraph} />
                        <Paragraph paragraph = {paragraph} />
                        <Paragraph paragraph = {paragraph} />
                        <Paragraph paragraph = {paragraph} />
                        <Paragraph paragraph = {paragraph} />
                        <Paragraph paragraph = {paragraph} />
                        <Paragraph paragraph = {paragraph} />
                    </div>
                </div>
            </div>
        )
    }
}