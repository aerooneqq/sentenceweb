import React, {Component} from "react";
import ReactDOM from "react-dom";

//Srtyles
import "./ParagraphStyles.css";
import "../DocumentElementsStyles.css";

//Components
import DocumentElementHeader from "../CommonComponents/DocumentElementHeader/DocumentElementHeader";
import PargraphText from "./ParagraphText/ParagraphText";
import VersionControll from "../CommonComponents/VersionControll/VersionControll";

export default class Paragraph extends Component { 
    constructor(props) { 
        super(props);

        this.handleBlur = this.handleBlur.bind(this); 
        this.handleFocus = this.handleFocus.bind(this);
    }

    /**
     * The delay is necessary because when we switch the sub-components in in this
     * component, it loses focus for a while, and then gets focus back, so in order
     * not to hide and show the version controll component we do the 50ms delay.
     */
    handleBlur() { 
        ReactDOM.findDOMNode(this).getElementsByClassName("versionControllContainer")[0].
            classList.remove("openedVersionContainer");
        ReactDOM.findDOMNode(this).getElementsByClassName("versionControllContainer")[0].
            classList.toggle("closedVersionContainer");
    }

    handleFocus() {
        ReactDOM.findDOMNode(this).getElementsByClassName("versionControllContainer")[0].
            classList.remove("closedVersionContainer");
        ReactDOM.findDOMNode(this).getElementsByClassName("versionControllContainer")[0].
            classList.toggle("openedVersionContainer");
    }

    render() { 
        return (
            <div className = "documentElementOutterCont" onBlur = {this.handleBlur} 
                 onFocus = {this.handleFocus}>
                <DocumentElementHeader headerText = {this.props.paragraph.name} />
                <PargraphText text = {this.props.paragraph.text} />
                
                <div className = "versionControllContainer closedVersionContainer">
                    <VersionControll />
                </div>
            </div>
        )
    }
}