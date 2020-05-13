import React, {Component} from "react";
import ReactDOM from "react-dom";

//Styles
import "./DocumentElementsStyles.css";

//Components
import VersionControll from "./CommonComponents/VersionControll/VersionControll";
import DocumentElementsService from "../../../../../../../../services/DocumentElementService/DocumentElementService";
import {BranchService} from "../../../../../../../../services/DocumentElementService/BranchService";
import {BranchNodeService} from "../../../../../../../../services/DocumentElementService/BranchNodeService";
import { alertAppMessage } from "../../../../../../../ApplicationMessage/ApplicationMessageManager";


export default class DocumentElementBase  extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            content: null,
            currentBranchID: props.element.currentBranchID,
            currentBranchNodeID: props.element.currentBranchNodeID,
            element: props.element
        }
        
        this.documentElementsService = new DocumentElementsService(localStorage.getItem("token"));
        this.branchService = new BranchService(localStorage.getItem("token"));
        this.branchNodeService = new BranchNodeService(localStorage.getItem("token"));

        this._getBrachNode = this._getBrachNode.bind(this);
        this._getBranch = this._getBranch.bind(this);
        this.createNewNode = this.createNewNode.bind(this);
        this.createNewBranch = this.createNewBranch.bind(this);
        this.deleteBranchNode = this.deleteBranchNode.bind(this);
        this.updateState = this.updateState.bind(this);
        this.renameBranchNode = this.renameBranchNode.bind(this);
        this.deleteBranch = this.deleteBranch.bind(this);
        this.changeCurrentBranch = this.changeCurrentBranch.bind(this);
        this.deleteThisElement = this.deleteThisElement.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.changeCurrentNode = this.changeCurrentNode.bind(this);
    }

    componentDidMount() {
        let selectedBranchID = this.state.element.currentBranchID;
        let selectedBranchNodeID = this.state.element.currentBranchNodeID;

        for (let i = 0; i < this.state.element.branches.length; ++i) {
            if (this.state.element.branches[i].branchID === selectedBranchID) {
                for (let j = 0; j < this.state.element.branches[i].branchNodes.length; ++j) {
                    if (this.state.element.branches[i].branchNodes[j].branchNodeID === selectedBranchNodeID) {
                        this.setState({
                            currentBranchID: this.state.element.currentBranchID,
                            currentBranchNodeID: this.state.element.currentBranchNodeID,
                            content: this.state.element.branches[i].branchNodes[j].documentElement,
                        }, () =>{
                            this.forceUpdate();
                        });
                    }
                }
            }
        }
    }

    changeCurrentContent(newContent) {
        this.content = newContent;
    }

    changeCurrentContentState(newContent) {
        this.setState({
            content: newContent,
        }, () => {
            this.forceUpdate();
        })
    }

    changeCurrentNode(newNodeID) {
        this.documentElementsService.changeSelectedBranchNode(this.state.element.elementID, newNodeID)
            .then(res => {
                alertAppMessage("The branch node was changed", "success");
                this.updateState(this.state.currentBranchID, newNodeID);
            })
            .catch(err => {
                if (err.response) {
                    alertAppMessage(err.response.data, "error");
                }
                else {
                    alertAppMessage("Error occurred while updating element", "error");
                }
            })
        
    }

    updateState(branchID, nodeID) {
        let branch = this._getBranch(branchID);
        let node = this._getBrachNode(branch, nodeID);
        
        this.setState({
            content: node.documentElement,
            currentBranchNodeID: nodeID,
            currentBranchID: branchID,
        }, () => {
            this.forceUpdate();
        })
    }

    changeCurrentBranch(newBranchID) {
        this.setState({
            currentBranchID: newBranchID,
        })
    }

    _getBranch(branchID) {
        for (let branch of this.state.element.branches) {
            if (branch.branchID == branchID) {
                return branch;
            }
        }

        return null;
    }

    _getBrachNode(branch, branchNodeID) {
        for (let branchNode of branch.branchNodes) {
            if (branchNode.branchNodeID == branchNodeID) {
                return branchNode;
            }
        }

        return null;
    }

    createNewNode(branchID, nodeName, comment) {
        this.branchNodeService.createNewBranchNode(this.state.element.elementID, branchID, nodeName, comment)
            .then(res => {
                this.setState({
                    element: res.data,
                }, () => {
                    alertAppMessage(`Created node ${nodeName}`, "success");
                });
            })
            .catch(err => {
                if (err.response) {
                    alertAppMessage(err.response.data, "error");
                }
                else {
                    alertAppMessage("Error occurred while updating element", "error");
                }
            });
    }

    createNewBranch(branchName) {
        this.branchService.createNewBranch(this.state.element.elementID, branchName)
            .then(res => {
                this.setState({
                    element: res.data
                }, () => {
                    alertAppMessage(`Created branch ${branchName}`, "success");
                });
            })
            .catch(err => {
                if (err.response) {
                    alertAppMessage(err.response.data, "error");
                }
                else {
                    alertAppMessage("Error occurred while updating element", "error");
                }
            });
    }

    deleteBranchNode(nodeID) {
        this.branchNodeService.deleteNode(this.state.element.elementID, nodeID)
            .then(res => {
                this.setState({
                    currentBranchID: res.data.currentBranchID,
                    currentBranchNodeID: res.data.currentBranchNodeID,
                    element: res.data,
                }, () => {
                    alertAppMessage(`Delete branch node`, "success");
                });
            })
            .catch(err => {
                if (err.response) {
                    alertAppMessage(err.response.data, "error");
                }
                else {
                    alertAppMessage("Error occurred while updating element", "error");
                }
            });
    }

    renameBranchNode(nodeID, newName, newComment) {
        this.branchNodeService.updateNode(this.state.element.elementID, nodeID, newName, newComment)
            .then(res => {
                this.setState({
                    element: res.data
                }, () => {
                    alertAppMessage(`Branch renamed to ${newName}`, "success");
                });
            })
            .catch(err => {
                if (err.response) {
                    alertAppMessage(err.response.data, "error");
                }
                else {
                    alertAppMessage("Error occurred while updating element", "error");
                }
            });
    }

    deleteBranch(branchID) {
        this.branchService.deleteBranch(this.state.element.elementID, branchID)
            .then(res => {
                this.setState({
                    element: res.data
                }, () => {
                    alertAppMessage(`Delete branch`, "success");
                });
            })
            .catch(err => {
                if (err.response) {
                    alertAppMessage(err.response.data, "error");
                }
                else {
                    alertAppMessage("Error occurred while updating element", "error");
                }
            });
    }

    updateContent(branchNodeID) {
        this.branchNodeService.updateNodeContent(this.state.element.elementID, branchNodeID, this.content)
            .then(res => {
                this.setState({
                    element: res.data,
                }, () => {
                    this.updateState(this.state.currentBranchID, this.state.currentBranchNodeID)
                    alertAppMessage(`Content updated`, "success")
                });
            })
            .catch(err => {
                if (err.response) {
                    alertAppMessage(err.response.data, "error");
                }
                else {
                    alertAppMessage("Error occurred while updating element", "error");
                }
            });
    }

    deleteThisElement() {
        this.props.deleteElement(this.state.element.elementID);
    }

    /**
     * Must be overridden in derived classes 
     */
    getDocumentElementContent(state) {
        return null;
    }

    render() { 
        return (
            <div className = "documentElementOutterCont" onBlur = {this.handleBlur} 
                 onFocus = {this.handleFocus}>
                {this.getDocumentElementContent(this.state)}
                
                <div className = "versionControllContainer">
                    {this.state.currentBranchID ? <VersionControll branches = {this.state.element.branches} 
                                                                   currentBranchID = {this.state.currentBranchID}
                                                                   currentBranchNodeID = {this.state.currentBranchNodeID}
                                                                   changeCurrentNode = {this.changeCurrentNode}
                                                                   changeCurrentBranch = {this.changeCurrentBranch}
                                                                   createNewNode = {this.createNewNode}
                                                                   createNewBranch = {this.createNewBranch}
                                                                   deleteNode = {this.deleteBranchNode}
                                                                   renameNode = {this.renameBranchNode}
                                                                   deleteBranch = {this.deleteBranch}
                                                                   deleteElement = {this.deleteThisElement}
                                                                   updateNodeContent = {this.updateContent}/>
                                                : null}
                </div>
            </div>
        )
    }
}