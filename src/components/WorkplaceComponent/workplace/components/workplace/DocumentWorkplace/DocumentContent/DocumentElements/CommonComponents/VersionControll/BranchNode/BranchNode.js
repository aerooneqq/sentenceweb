import React, {Component} from "react";

//Styles 
import "./VersionStyles.css";
import { ContextMenuTrigger } from "react-contextmenu";
import BranchNodeContextMenu from "./BranchNodeContextMenu/BranchNodeContextMenu";
import { showInputMessageBox } from "../../../../../../../../../../MessageInputBox/MessageInputBoxManager";

export default class BranchNode extends Component {
    constructor(props) { 
        super(props);
        
        this.contextMenuID = this.props.branchNode.createdAt + "contextMenu";

        this._getClassName = this._getClassName.bind(this);
        this.renameNode = this.renameNode.bind(this);
        this.deleteNode = this.deleteNode.bind(this);
    }

    _getClassName() { 
        return this.props.selected === true ? "versionCircle selectedVersion versionToolTipContainer" 
            : "versionCircle versionToolTipContainer";
    }

    deleteNode() {
        this.props.deleteNode(this.props.branchNode.branchNodeID);
    }

    renameNode() {
        let inputs =  [{title: "Name", value: this.props.branchNode.title}, 
                       {title: "Comment", value: this.props.branchNode.comment}];

        showInputMessageBox("Reenter the params of branch node", inputs, 
            (values) => {
                if (values["Name"] != this.props.branchNode.title || values["Comment"] != this.props.branchNode.comment) {
                    this.props.renameNode(this.props.branchNode.branchNodeID, values["Name"], values["Comment"]);
                }
            }, () => {}); 
    }

    render() { 
        return ( 
            <>
                <ContextMenuTrigger id = {this.contextMenuID}>
                    <div className = {this._getClassName()}>
                        <span className = "versionToolTipText">
                            <div> {this.props.branchNode.title} </div>
                            <div> {this.props.branchNode.createdAt.substr(0, 10)} {this.props.branchNode.createdAt.substr(11, 5)} </div>
                        </span>
                    </div>
                </ContextMenuTrigger>

                <BranchNodeContextMenu contextMenuID = {this.contextMenuID}
                                       deleteNode = {this.deleteNode}
                                       renameNode = {this.renameNode} />
            </>

        )
    }
}