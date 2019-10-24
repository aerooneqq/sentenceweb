import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

//Styles
import "./VersionControll.css";

//Compomnents
import Version from "./Version/Version";
import ConnectionLine from "./ConnectionLine/ConnectionLine";
import BranchSwitcher from "./BranchSwitcher/BranchSwitcher";

const versions = [
    {
        name: "Version 1",
        id: 0,
        date: "30.05.2000",
        selected: false
    },
    {
        name: "Version 1",
        id: 0,
        date: "30.05.2000",
        selected: false
    },
    {
        name: "Version 1",
        id: 0,
        date: "30.05.2000",
        selected: false
    },
    {
        name: "Version 1",
        id: 0,
        date: "30.05.2000",
        selected: true
    },
    {
        name: "Version 1",
        id: 0,
        date: "30.05.2000",
        selected: false
    }
]

export default class VersionControll extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            isFirstLoad: true, 
            versions: null
        }
    }

    componentDidMount() { 
        let elements = [];

        for (let i = 0; i < versions.length - 1; i++) { 
            elements.push(<Version key = {i} version = {versions[i]} />);
            elements.push(<ConnectionLine key = {i + versions.length} />);
        }

        elements.push(<Version key = {versions.length - 1} version = {versions[versions.length - 1]} />);

        this.setState({
            versions: elements
        });
    }

    _getContainerClass() {
        if (this.state.isFirstLoad === true) { 
            this.setState({ 
                isFirstLoad: false
            })
            return "versionControllOutterCont";
        }

        return this.props.visible ? "versionControllOutterCont openedContainer" : "versionControllOutterCont closedContainer";
    }

    render() { 
        return (
            <div className = {this._getContainerClass()}>
                <div className = "topVersionControllCont">
                    <BranchSwitcher />
                    <button className = "saveNewVersionBtn">
                        Save
                    </button>
                    <button className = "deleteNewVersionBtn">
                        Delete
                    </button>
                </div>

                <div className = "versionsGraphContainer">
                    <div className = "versionControllInnerContainer">
                        {this.state.versions}
                    </div>
                    <div className = "fillContainer" />
                </div>
            </div>
        )
    }
}