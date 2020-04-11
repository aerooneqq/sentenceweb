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
import { alertAppMessage } from "../../../../../../../../ApplicationMessage/ApplicationMessageManager";


export default class Paragraph extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            currentText: null,
            currentName: null,
            currentBranchID: null,
            currentBranchNodeID: null,
            paragraph: props.paragraph
        }

        this.documentElementsService = new DocumentElementsService(localStorage.getItem("token"));

        this.changeCurrentText = this.changeCurrentText.bind(this);
        this.updateState = this.updateState.bind(this);
        this._getBrachNode = this._getBrachNode.bind(this);
        this._getBranch = this._getBranch.bind(this);
        this.createNewNode = this.createNewNode.bind(this);
        this.createNewBranch = this.createNewBranch.bind(this);
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
        let branch = this._getBranch(newBranchID);
        if (!branch.branchNodes || branch.branchNodes.length == 0) {
            this.updateState(newBranchID, null);
        }
        else {
            this.updateState(newBranchID, branch.branchNodes[0].ID);
        }
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

    updateState(newBranchID, newNodeID) {
        let branch = this._get_branch(newBranchID);
        let branchNode = this._getBrachNode(branch, newNodeID);

        this.setState({
            currentText: branchNode ? branchNode.documentElement.text : "",
            currentName: branchNode ? branchNode.documentElement.name : "",
            currentBranchID: newBranchID,
            currentBranchNodeID: newNodeID,
        });
    }

    createNewNode(branchID) {
        this.documentElementsService.createNewBranchNode(this.state.paragraph.elementID, branchID)
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
        this.documentElementsService.createNewBranch(this.state.paragraph.elementID, branchName)
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

    render() { 
        return (
            <div className = "documentElementOutterCont" onBlur = {this.handleBlur} 
                 onFocus = {this.handleFocus}>
                {this.state.currentName ? <DocumentElementHeader headerText = {this.state.currentName} /> : null }
                {this.state.currentText ? <ParagraphText text = {this.state.currentText} changeText = {this.changeCurrentText} /> 
                    : null}
                
                <div className = "versionControllContainer">
                    {this.state.currentBranchID ? <VersionControll branches = {this.state.paragraph.branches} 
                                                                   currentBranchID = {this.state.currentBranchID}
                                                                   currentBranchNodeID = {this.state.currentBranchNodeID}
                                                                   changeCurrentNode = {this.changeCurrentNode}
                                                                   changeCurrentBranch = {this.changeCurrentBranch}
                                                                   createNewNode = {this.createNewNode}
                                                                   createNewBranch = {this.createNewBranch}/>
                                                : null}
                </div>
            
            </div>
        )
    }
}