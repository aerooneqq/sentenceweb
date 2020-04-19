import React, {Component} from "react";

//Styles
import "./ParagraphStyles.css";
import "../DocumentElementsStyles.css";

import {deepCopy} from "../../../../../../../../../services/Utility/UtilityFunctions"

//Components
import DocumentElementHeader from "../CommonComponents/DocumentElementHeader/DocumentElementHeader";
import ParagraphText from "./ParagraphText/ParagraphText";
import DocumentElementBase from "../DocumentElementBase";


export default class Paragraph extends DocumentElementBase { 
    constructor(props) { 
        super(props);
    }

    getDocumentElementContent(state) {
        if (!state || !state.content) {
            return (
                <></>
            )
        }

        let changeText = (newText) => {
            let newContent = deepCopy(state.content);
            newContent.text = newText;
            super.changeCurrentContent(newContent); 
        }

        let changeName = (newName) => {
            let newContent = deepCopy(state.content);
            newContent.name = newName;
            super.changeCurrentContent(newContent); 
        }

        return (
            <>
                {state.content.name ? <DocumentElementHeader name = {state.content.name} 
                                                             changeName = {changeName}/> : null }
                {state.content.text ? <ParagraphText text = {state.content.text} changeText = {changeText}/> 
                                   : null}
            </>
        )
    }
}