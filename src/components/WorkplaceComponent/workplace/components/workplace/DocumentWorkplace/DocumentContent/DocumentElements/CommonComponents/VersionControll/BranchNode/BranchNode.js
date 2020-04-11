import React, {Component} from "react";

//Styles 
import "./VersionStyles.css";

export default class BranchNode extends Component {
    constructor(props) { 
        super(props);

        this._getClassName = this._getClassName.bind(this);
    }

    _getClassName() { 
        return this.props.selected === true ? "versionCircle selectedVersion versionToolTipContainer" 
            : "versionCircle versionToolTipContainer";
    }

    render() { 
        return ( 
            <div className = {this._getClassName()}>
                <span className = "versionToolTipText">
                    <div> {this.props.branchNode.title} </div>
                    <div> {this.props.branchNode.createdAt} </div>
                </span>
            </div>
        )
    }
}