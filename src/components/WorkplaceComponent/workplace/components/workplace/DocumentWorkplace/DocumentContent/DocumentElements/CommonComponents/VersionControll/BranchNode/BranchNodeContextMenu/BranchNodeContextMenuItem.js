import React, {Component} from "react"

export default class BranchNodeContextMenuItem extends Component {
    constructor(props) { 
        super(props);
    }
    
    render() { 
        return ( 
            <div className = "branchNodeContextMenuItemCont" onClick= {this.props.handle}>
                <img src = {this.props.src} className = "branchNodeContextMenuItemIcon" alt = ""/>
                <div className = "branchNodeContextMenuItemText">
                    {this.props.text}
                </div>
            </div>
        )   
    }
}