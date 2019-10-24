import React, {Component} from "react"

import "./DocumentFolderItemContextMenuStyles.css";

export default class DocumentFolderContextMenuItem extends Component {
    constructor(props) { 
        super(props);
    }
    
    render() { 
        return ( 
            <div className = "documentFolderContextMenuItemCont">
                <img src = {this.props.src} className = "documentFolderContextMenuItemIcon" alt = ""/>
                <div className = "documentFolderContextMenuItemText">
                    {this.props.text}
                </div>
            </div>
        )   
    }
}