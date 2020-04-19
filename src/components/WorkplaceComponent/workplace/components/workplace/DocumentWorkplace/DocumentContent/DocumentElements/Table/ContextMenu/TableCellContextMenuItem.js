import React, {Component} from "react"

export default class TableCellContextMenuItem extends Component {
    constructor(props) { 
        super(props);
    }
    
    render() { 
        return ( 
            <div className = "tableCellContextMenuItemCont" onClick= {this.props.handle}>
                <img src = {this.props.src} className = "tableCellContextMenuItemIcon" alt = ""/>
                <div className = "tableCellContextMenuItemText">
                    {this.props.text}
                </div>
            </div>
        )   
    }
}