import React, {Component} from "react";

export default class FolderComponentContextMenuItem extends Component { 

    constructor(props) { 
        super(props);
    }
    
    render() { 
        return ( 
            <div className = "folderComponentContextMenuItemCont" onClick= {this.props.handle}>
                <img src = {this.props.src} className = "folderComponentContextMenuItemIcon" alt = ""/>
                <div className = "folderComponentContextMenuItemText">
                    {this.props.text}
                </div>
            </div>
        )   
    }

}