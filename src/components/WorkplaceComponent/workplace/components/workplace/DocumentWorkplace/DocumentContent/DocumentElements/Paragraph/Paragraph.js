import React, {Component} from "react";
import ReactDOM from "react-dom";

//Styles
import "./ParagraphStyles.css";
import "../DocumentElementsStyles.css";

//Components
import DocumentElementHeader from "../CommonComponents/DocumentElementHeader/DocumentElementHeader";
import ParagraphText from "./ParagraphText/ParagraphText";
import VersionControll from "../CommonComponents/VersionControll/VersionControll";
import DocumentElementsService from "../../../../../../../../../services/DocumentElementService/DocumentElementService";
import {BranchService} from "../../../../../../../../../services/DocumentElementService/BranchService";
import {BranchNodeService} from "../../../../../../../../../services/DocumentElementService/BranchNodeService";
import { alertAppMessage } from "../../../../../../../../ApplicationMessage/ApplicationMessageManager";


export default class Paragraph extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            currentText: null,
            currentName: null,
            currentBranchID: props.paragraph.currentBranchID,
            currentBranchNodeID: props.paragraph.currentBranchNodeID,
            paragraph: props.paragraph
        }
        
        this.documentElementsService = new DocumentElementsService(localStorage.getItem("token"));
        this.branchService = new BranchService(localStorage.getItem("token"));
        this.branchNodeService = new BranchNodeService(localStorage.getItem("token"));

        this.changeCurrentText = this.changeCurrentText.bind(this);
        this._getBrachNode = this._getBrachNode.bind(this);
        this._getBranch = this._getBranch.bind(this);
        this.createNewNode = this.createNewNode.bind(this);
        this.createNewBranch = this.createNewBranch.bind(this);
        this.deleteBranchNode = this.deleteBranchNode.bind(this);
        this.renameBranchNode = this.renameBranchNode.bind(this);
        this.deleteBranch = this.deleteBranch.bind(this);
        this.changeCurrentBranch = this.changeCurrentBranch.bind(this);
        this.deleteThisElement = this.deleteThisElement.bind(this);
    }

    componentDidMount() {
        let selectedBranchID = this.state.paragraph.currentBranchID;
        let selectedBranchNodeID = this.state.paragraph.currentBranchNodeID;

        for (let i = 0; i < this.state.paragraph.branches.length; ++i) {
            if (this.state.paragraph.branches[i].branchID === selectedBranchID) {
                for (let j = 0; j < this.state.paragraph.branches[i].branchNodes.length; ++j) {
                    if (this.state.paragraph.branches[i].branchNodes[j].branchNodeID === selectedBranchNodeID) {
                        this.setState({
                            currentBranchID: this.state.paragraph.currentBranchID,
                            currentBranchNodeID: this.state.paragraph.currentBranchNodeID,
                            currentText: this.state.paragraph.branches[i].branchNodes[j].documentElement.text,
                            currentName: this.state.paragraph.branches[i].branchNodes[j].documentElement.name,
                        });
                    }
                }
            }
        }
    }

    changeCurrentText(newText) {
        this.setState({
            currentText: newText,
        })
    }

    changeCurrentNode(newNodeID) {
        this.updateState(this.state.currentBranchID, newNodeID);
    }

    changeCurrentBranch(newBranchID) {
        this.setState({
            currentBranchID: newBranchID,
        })
    }

    _getBranch(branchID) {
        for (let branch of this.state.paragraph.branches) {
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
        this.branchNodeService.createNewBranchNode(this.state.paragraph.elementID, branchID, nodeName, comment)
            .then(res => {
                this.setState({
                    paragraph: res.data
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
        this.branchService.createNewBranch(this.state.paragraph.elementID, branchName)
            .then(res => {
                this.setState({
                    paragraph: res.data
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
        this.branchNodeService.deleteNode(this.state.paragraph.elementID, nodeID)
            .then(res => {
                this.setState({
                    currentBranchID: res.data.currentBranchID,
                    currentBranchNodeID: res.data.currentBranchNodeID,
                    paragraph: res.data,
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
        this.branchNodeService.updateNode(this.state.paragraph.elementID, nodeID, newName, newComment)
            .then(res => {
                this.setState({
                    paragraph: res.data
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
        this.branchService.deleteBranch(this.state.paragraph.elementID, branchID)
            .then(res => {
                this.setState({
                    paragraph: res.data
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
        this.props.deleteElement(this.state.paragraph.elementID);
    }

    render() { 
        return (
            <div className = "documentElementOutterCont" onBlur = {this.handleBlur} 
                 onFocus = {this.handleFocus}>
                {this.state.currentName ? <DocumentElementHeader headerText = {this.state.currentName}/> : null }
                {this.state.currentText ? <ParagraphText text = {this.state.currentText} changeText = {this.changeCurrentText}/> 
                    : null}
                
                <div className = "versionControllContainer">
                    {this.state.currentBranchID ? <VersionControll branches = {this.state.paragraph.branches} 
                                                                   currentBranchID = {this.state.currentBranchID}
                                                                   currentBranchNodeID = {this.state.currentBranchNodeID}
                                                                   changeCurrentNode = {this.changeCurrentNode}
                                                                   changeCurrentBranch = {this.changeCurrentBranch}
                                                                   createNewNode = {this.createNewNode}
                                                                   createNewBranch = {this.createNewBranch}
                                                                   deleteNode = {this.deleteBranchNode}
                                                                   renameNode = {this.renameBranchNode}
                                                                   deleteBranch = {this.deleteBranch}
                                                                   deleteElement = {this.deleteThisElement}/>
                                                : null}
                </div>
            </div>
        )
    }
}