import React, {Component} from "react"; 

//Styles
import "./BranchOptionStyles.css";
import { isArray } from "util";

export default class BranchOption extends Component { 
    constructor(props) {
        super(props); 
    }

    onBranchOptionClick() { 
        alert("Branch option is clicked!")
    }

    render() { 
        return ( 
            <div className = "branchOptionCont" onClick = {this.onBranchOptionClick}>
                Test option
            </div>
        )
    }
}