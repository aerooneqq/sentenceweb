import React, {Component} from "react"; 

//Styles
import "./BranchOptionStyles.css";
import { isArray } from "util";

export default class BranchOption extends Component { 
    constructor(props) {
        super(props);
        
        this.onBranchOptionClick = this.onBranchOptionClick.bind(this);
    }

    onBranchOptionClick() { 
        this.props.selectBranch(this.props.branchName, this.props.branchID);
    }

    render() { 
        return ( 
            <div className = "branchOptionCont" onClick = {this.onBranchOptionClick}>
                {this.props.branchName}
            </div>
        )
    }
}