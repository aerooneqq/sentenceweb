import React, {Component} from "react"; 
import ReactDOM from "react-dom";

//Styles
import "./BranchSelectStyles.css";

//Images
import downArrowIcon from "./img/down_arrow.svg";

//Components
import BranchOption from "./BranchOption/BranchOption";
import CreateNewBranch from "./CreateNewBranch/CreateNewBranch";


export default class BranchSelect extends Component {
    constructor(props) { 
        super(props);

        this.state = { 
            selectedBranchID: null,
            selectedBranchName: null,
        }

        this.onArrowClick = this.onArrowClick.bind(this);
        this._getOptionsClass = this._getOptionsClass.bind(this);
        this.toggleRotationClassToArrow = this.toggleRotationClassToArrow.bind(this);
        this.toggleBackRotationClassToArrow = this.toggleBackRotationClassToArrow.bind(this);
        this.selectBranch = this.selectBranch.bind(this);
        this._getBranchOptions = this._getBranchOptions.bind(this);
        this.createNewBranch = this.createNewBranch.bind(this);
    }

    toggleRotationClassToArrow() { 
        ReactDOM.findDOMNode(this).getElementsByTagName("img")[0].classList.toggle("optionsDownArrowRotated");
        ReactDOM.findDOMNode(this).getElementsByTagName("img")[0].classList.remove("optionsDownArrowBackRotated");
    }

    toggleBackRotationClassToArrow() { 
        ReactDOM.findDOMNode(this).getElementsByTagName("img")[0].classList.toggle("optionsDownArrowBackRotated");
        ReactDOM.findDOMNode(this).getElementsByTagName("img")[0].classList.remove("optionsDownArrowRotated");
    }

    onArrowClick() { 
        if (this.state.areOptionsVisible) { 
            this.toggleBackRotationClassToArrow();
        }
        else { 
            this.toggleRotationClassToArrow();
        }

        this.setState((prevState) => { 
            return { 
                areOptionsVisible: !prevState.areOptionsVisible
            }
        });
    }

    _getOptionsClass() { 
        return this.state.areOptionsVisible === true ? "branchSelectOptions optionsOpened" : "branchSelectOptions"; 
    }

    selectBranch(branchName, branchID) {
        this.props.changeSelectedBranch(branchID);
        this.setState({
            selectedBranchID: branchID,
            selectedBranchName: branchName,
        }); 
    }

    createNewBranch(branchName) {
        this.props.createNewBranch(branchName);
    }

    _getBranchOptions(branches) {
        let branchOptions = []

        for (let branch of branches) {
            branchOptions.push(<BranchOption branchName = {branch.branchName}
                                             branchID = {branch.branchID}
                                             selectBranch = {this.selectBranch} />);
        }
        
        branchOptions.push(<CreateNewBranch createNewBranch = {this.createNewBranch} />)

        return branchOptions;
    }

    render() { 
        return ( 
            <div className = "branchSelect">
                <div className = "branchSelectHeader">
                    <div className = "branchHeaderText">
                        Branch
                    </div>
                    <div className = "currentlySelectedOption" onClick = {this.onArrowClick}>
                        {this.state.selectedBranchName}
                    </div>
                    <div className = "arrowIconContainer" onClick = {this.onArrowClick}>
                        <img className = "dropDownArrowIcon" src={downArrowIcon} width="16" height="16" alt="The drop-down arrow" />
                    </div>
                </div>
                <div className = {this._getOptionsClass()}>
                    {this.props.branches ? this._getBranchOptions(this.props.branches) : null}
                </div>
            </div>
        )
    }
}