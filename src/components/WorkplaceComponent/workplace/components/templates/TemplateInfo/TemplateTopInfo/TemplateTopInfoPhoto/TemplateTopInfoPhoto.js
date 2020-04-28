import React, {Component} from "react";

import "./TemplateTopInfoPhoto.css";
import defaultTemplatePhoto from "./img/default_template_photo.svg";


export default class TemplateTopInfoPhoto extends Component {
    constructor(props) {
        super(props);

        this.updateTemplatePhoto = this.updateTemplatePhoto.bind(this);
    }

    updateTemplatePhoto() {
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

                this.props.updateTemplatePhoto(byteArray);
            }
        }

        input.click();
    }

    render() {
        return (
            <div className = "template-top-info-photo-container"
                 onClick = {this.updateTemplatePhoto}>
                <img className = {this.props.photo ? "template-top-info-photo-exists" : "template-top-info-photo-doesnt-exist" }
                     src = {this.props.photo ? "data:image/png;base64," + this.props.photo : defaultTemplatePhoto} /> 
            </div>
        )
    }
}