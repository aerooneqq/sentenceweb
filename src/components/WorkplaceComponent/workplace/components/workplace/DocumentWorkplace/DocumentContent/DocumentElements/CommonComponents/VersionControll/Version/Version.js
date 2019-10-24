import React, {Component} from "react";

//Styles 
import "./VersionStyles.css";

export default class Version extends Component {
    constructor(props) { 
        super(props);

        this._getClassName = this._getClassName.bind(this);
    }

    _getClassName() { 
        return this.props.version.selected === true ? "versionCircle selectedVersion versionToolTipContainer" 
            : "versionCircle versionToolTipContainer";
    }

    render() { 
        return ( 
            <div className = {this._getClassName()}>
                <span className = "versionToolTipText">
                    <div> {this.props.version.name} </div>
                    <div> {this.props.version.date} </div>
                </span>
            </div>
        )
    }
}