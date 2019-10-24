import React, {Component} from "react";

//Styles
import "./BranchSwitcherStyles.css";
import BranchSelect from "./BranchSelect/BranchSelect";

export default class BranchSwitcher extends Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <div className = "branchSwitcherOutterCont">
                <BranchSelect />
            </div>
        )
    }
}