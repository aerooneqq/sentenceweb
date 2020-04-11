import React, {Component} from "react";

//Styles
import "./BranchSwitcherStyles.css";
import BranchSelect from "./BranchSelect/BranchSelect";

export default class BranchSwitcher extends Component { 
    constructor(props) { 
        super(props);

        this.createNewBranch = this.createNewBranch.bind(this);
    }

    createNewBranch(branchName) {
        this.props.createNewBranch(branchName);
    }

    render() { 
        return (
            <div className = "branchSwitcherOutterCont">
                <BranchSelect branches = {this.props.branches} 
                              changeSelectedBranch = {this.props.changeSelectedBranch}
                              createNewBranch = {this.createNewBranch}/>
            </div>
        )
    }
}