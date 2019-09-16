import React, {Component} from "react";

//Styles
import "./DocumetFileContextMenuStyles.css";

export default class DocumentFileContextMenuItem extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <div className = "documentFileContextMenuItemCont">
                <img src = {this.props.src} className = "documentFileContextMenuItemIcon" alt = ""/>
                <div className = "documentFileContextMenuItemText">
                    {this.props.text}
                </div>
            </div>
        )
    }

}