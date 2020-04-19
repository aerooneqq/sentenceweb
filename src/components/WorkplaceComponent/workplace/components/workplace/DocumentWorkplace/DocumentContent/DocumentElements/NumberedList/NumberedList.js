import React from "react";

import "./NumberedList.css";
import DocumentElementBase from "../DocumentElementBase";
import NumberedListElement from "./NumberedListElement";
import DocumentElementHeader from "../CommonComponents/DocumentElementHeader/DocumentElementHeader";
import { deepCopy } from "../../../../../../../../../services/Utility/UtilityFunctions";

export default class NumberedList extends DocumentElementBase {
    constructor(props) {
        super(props);
    }

    getDocumentElementContent(state) {
        state = deepCopy(state);
        if (!state || !state.content) {
            return (
                <></>
            )
        }

        let changeName = (newName) => {
            let newContent = deepCopy(state.content);
            newContent.name = newName;
            super.changeCurrentContent(newContent); 
        }
        
        let elementsComponents = []
        let _getListElements = (elements, level) => {
            let capturedElements = elements;
            
            let deleteElement = (index) => {
                capturedElements.splice(index, 1);
                super.changeCurrentContent(state.content);
                super.changeCurrentContentState(state.content);
            }
            let addElement = (index) => {
                capturedElements.splice(index + 1, 0, {content: "Enter text here...", elements: []});
                super.changeCurrentContentState(state.content);
                super.changeCurrentContent(state.content);
            }

            if (elements) {
                let idx = 0;
                for (let element of elements) {
                    let capturedElement = element;
                    let changeCurrentElement = newText => {
                        capturedElement.content = newText;
                        super.changeCurrentContent(state.content);
                    }
                    let insertInside = () => {
                        if (!capturedElement.elements) {
                            capturedElement.elements = [];
                        }

                        capturedElement.elements.push({content: "Enter text here...", elements: []});
                        super.changeCurrentContent(state.content);
                        super.changeCurrentContentState(state.content);
                    }

                    elementsComponents.push(<NumberedListElement element = {element}
                                                                 level = {level}
                                                                 index = {idx}
                                                                 changeCurrentElement = {changeCurrentElement}
                                                                 addElement = {addElement}
                                                                 deleteElement = {deleteElement}
                                                                 insertInside = {insertInside} />);
                    _getListElements(element.elements, level + 1);
                    idx++;
                }
            }
        }

        _getListElements(state.content.elements, 0)

        return (
            <>
                {state.content.name ? <DocumentElementHeader name = {state.content.name} 
                                                             changeName = {changeName}/> : null }
                {state.content ? elementsComponents : null}
            </>
        )
    }
}