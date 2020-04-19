import React from "react";

import "./Image.css";

import DocumentElementBase from "../DocumentElementBase";
import { convertBytesToBase64 } from "../../../../../../../../../services/Utility/UtilityFunctions";
import {deepCopy} from "../../../../../../../../../services/Utility/UtilityFunctions"
import DocumentElementHeader from "../CommonComponents/DocumentElementHeader/DocumentElementHeader";


export default class Image extends DocumentElementBase {
    constructor(props) {
        super(props);
    }

    getDocumentElementContent(state) {
        if (!state || !state.content) {
            return (
                <></>
            )
        }
        
        let uploadNewPicture = () => {
            let input = document.createElement("input");
            input.type = "file";
            input.accept = "image/jpeg,image/png,image/gif";

            input.onchange = e => { 
            let file = e.target.files[0];

            let reader = new FileReader();
                reader.readAsArrayBuffer(file);

                reader.onload = e => { 
                    let array = new Uint8Array(e.target.result);
                    
                    let byteArray = []

                    for (let i = 0; i < array.length; i++) { 
                        byteArray.push(array[i]);
                    }
                    
                    let newContent = deepCopy(state.content);
                    newContent.source = convertBytesToBase64(byteArray);
                    console.log(newContent)
                    super.changeCurrentContentState(newContent);
                    super.changeCurrentContent(newContent);
                }
            }

            input.click();
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

                <div className = "document-element-image-container"
                     onClick = {uploadNewPicture}>
                    <img className = "document-element-image" 
                         src = {`data:image/png;base64,${state.content.source}`} />
                </div>
            </>
        )
    }
}