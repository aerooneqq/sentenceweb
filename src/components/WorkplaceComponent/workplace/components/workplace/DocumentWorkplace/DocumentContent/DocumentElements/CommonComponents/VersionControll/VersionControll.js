import React, {Component} from "react";

//Styles
import "./VersionControll.css";

//Compomnents
import BranchNode from "./BranchNode/BranchNode";
import ConnectionLine from "./ConnectionLine/ConnectionLine";
import BranchSwitcher from "./BranchSwitcher/BranchSwitcher";
import AddNewNode from "./AddNewNode/AddNewNode";


export default class VersionControll extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            isFirstLoad: true, 
            currentBranchNodes: null,
            currentBranchID: props.currentBranchID,
            currentBranchNodeID: props.currentBranchNodeID
        }

        this._setCurrentSelectedBranch = this._setCurrentSelectedBranch.bind(this);
        this.changeSelectedBranch = this.changeSelectedBranch.bind(this);
        this._getBranch = this._getBranch.bind(this);
        this.createNewBranchNode = this.createNewBranchNode.bind(this);
        this.createNewBranch = this.createNewBranch.bind(this);
    }

    _setCurrentSelectedBranch(branchID) {
        if (this.props.branches) {
            let elements = [];
            let branchNodes = this._getBranch(this.props.branches, branchID).branchNodes;
    
            for (let i = 0; i < branchNodes.length - 1; ++i) { 
                elements.push(<BranchNode key = {i} branchNode = {branchNodes[i]}
                                          selected = {this.props.currentBranchNodeID === branchNodes[i].branchNodeID} />);
                elements.push(<ConnectionLine key = {i + branchNodes.length} />);
            }
    
            elements.push(<BranchNode key = {branchNodes.length - 1} branchNode = {branchNodes[branchNodes.length - 1]} />);
            elements.push(<ConnectionLine key = {2 * branchNodes.length + 2}  />);
            elements.push(<AddNewNode createNewNode = {this.createNewBranchNode} />);
    
            return elements;
        }

        return null;
    }
    
    _getBranch(branches, id) {
        for (let branch of branches) {
            if (branch.branchID === id) {
                return branch;
            }
        }

        return null;
    }

    createNewBranchNode() {
        this.props.createNewNode(this.state.currentBranchID);
    }

    createNewBranch(branchName) {
        this.props.createNewBranch(branchName);
    }

    changeSelectedBranch(newBranchID) {
        this.setState({
            currentBranchID: newBranchID,
        });
    }

    render() { 
        return (
            <div className = "versionControllOutterCont">
                <div className = "topVersionControllCont" >
                    <BranchSwitcher branches = {this.props.branches}
                                    changeSelectedBranch = {this.changeSelectedBranch}
                                    createNewBranch = {this.createNewBranch}/>
                    <button className = "saveNewVersionBtn">
                        Save
                    </button>
                    <button className = "deleteNewVersionBtn">
                        Delete
                    </button>
                </div>

                <div className = "versionsGraphContainer" >
                    <div className = "versionControllInnerContainer">
                        {this._setCurrentSelectedBranch(this.state.currentBranchID)}
                    </div>
                    <div className = "fillContainer" />
                </div>
            </div>
        )
    }
}