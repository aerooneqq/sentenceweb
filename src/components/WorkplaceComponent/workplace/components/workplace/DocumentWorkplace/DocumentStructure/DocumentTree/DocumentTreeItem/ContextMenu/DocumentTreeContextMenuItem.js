import React, {Component} from "react"

export default class DocumentTreeContextMenuItem extends Component {
    constructor(props) { 
        super(props);
    }
    
    render() { 
        return ( 
            <div className = "documentTreeContextMenuItemCont" onClick= {this.props.handle}>
                <img src = {this.props.src} className = "documentTreeContextMenuItemIcon" alt = ""/>
                <div className = "documentTreeContextMenuItemText">
                    {this.props.text}
                </div>
            </div>
        )   
    }
}