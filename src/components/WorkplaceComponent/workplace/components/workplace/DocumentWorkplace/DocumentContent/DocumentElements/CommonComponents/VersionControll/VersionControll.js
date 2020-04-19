import React, {Component} from "react";

//Styles
import "./VersionControll.css";

//Compomnents
import BranchNode from "./BranchNode/BranchNode";
import ConnectionLine from "./ConnectionLine/ConnectionLine";
import BranchSwitcher from "./BranchSwitcher/BranchSwitcher";
import AddNewNode from "./AddNewNode/AddNewNode";
import CreateNewElement from "../CreateNewElement/CreateNewElement";


export default class VersionControll extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            isFirstLoad: true, 
            currentBranchNodes: null,
            currentBranchNodeID: props.currentBranchNodeID,
        }

        this._setCurrentSelectedBranch = this._setCurrentSelectedBranch.bind(this);
        this.changeSelectedBranch = this.changeSelectedBranch.bind(this);
        this._getBranch = this._getBranch.bind(this);
        this.createNewBranchNode = this.createNewBranchNode.bind(this);
        this.createNewBranch = this.createNewBranch.bind(this);
        this.deleteCurrentBranch = this.deleteCurrentBranch.bind(this);
        this.deleteDocumentElement = this.deleteDocumentElement.bind(this);
        this.updateNodeContent = this.updateNodeContent.bind(this);
        this.changeCurrentBranchNode = this.changeCurrentBranchNode.bind(this);
    }

    _setCurrentSelectedBranch(branchID) {
        if (this.props.branches && branchID) {
            let elements = [];
            let branch = this._getBranch(this.props.branches, branchID)
            
            if (branch) {
                let branchNodes = branch.branchNodes;
                for (let i = 0; i < branchNodes.length - 1; ++i) { 
                    elements.push(<BranchNode key = {i} branchNode = {branchNodes[i]}
                                              selected = {this.props.currentBranchNodeID === branchNodes[i].branchNodeID}
                                              deleteNode = {this.props.deleteNode} 
                                              renameNode = {this.props.renameNode}
                                              changeCurrentBranchNode = {this.changeCurrentBranchNode}/>);
                    elements.push(<ConnectionLine key = {i + branchNodes.length} />);
                }
        
                elements.push(<BranchNode key = {branchNodes.length - 1} 
                                          selected = {this.props.currentBranchNodeID === branchNodes[branchNodes.length - 1].branchNodeID}
                                          branchNode = {branchNodes[branchNodes.length - 1]}
                                          deleteNode = {this.props.deleteNode} 
                                          renameNode = {this.props.renameNode}
                                          changeCurrentBranchNode = {this.changeCurrentBranchNode}/>);
                elements.push(<ConnectionLine key = {2 * branchNodes.length + 2}  />);
                elements.push(<AddNewNode createNewNode = {this.createNewBranchNode} />);
        
                return elements;
            }
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

    changeCurrentBranchNode(newNodeID) {
        this.setState({
            currentBranchNodeID: newNodeID,
        }, () => {
            this.props.changeCurrentNode(newNodeID);
        })
    }
    
    createNewBranchNode(nodeName, comment) {
        this.props.createNewNode(this.props.currentBranchID, nodeName, comment);
    }

    createNewBranch(branchName) {
        this.props.createNewBranch(branchName);
    }

    changeSelectedBranch(newBranchID) {
        this.props.changeCurrentBranch(newBranchID);
    }

    deleteCurrentBranch() {
        this.props.deleteBranch(this.props.currentBranchID);
    }

    deleteDocumentElement() {
        this.props.deleteElement();
    }

    updateNodeContent() {
        this.props.updateNodeContent(this.state.currentBranchNodeID)
    }

    render() { 
        return (
            <div className = "versionControllOutterCont">
                <div className = "topVersionControllCont" >
                    <BranchSwitcher branches = {this.props.branches}
                                    changeSelectedBranch = {this.changeSelectedBranch}
                                    createNewBranch = {this.createNewBranch}
                                    firstBranchID = {this.props.currentBranchID}/>
                    <button className = "saveNewVersionBtn" onClick = {this.updateNodeContent}>
                        Save
                    </button>
                    <button className = "deleteNewVersionBtn" onClick = {this.deleteCurrentBranch}>
                        Delete branch
                    </button>
                    <button className = "deleteElementBtn" onClick = {this.deleteDocumentElement}>
                        Delete element
                    </button>
                </div>

                <div className = "versionsGraphContainer" >
                    <div className = "versionControllInnerContainer">
                        {this._setCurrentSelectedBranch(this.props.currentBranchID)}
                    </div>
                    <div className = "fillContainer" />
                </div>
            </div>
        )
    }
}