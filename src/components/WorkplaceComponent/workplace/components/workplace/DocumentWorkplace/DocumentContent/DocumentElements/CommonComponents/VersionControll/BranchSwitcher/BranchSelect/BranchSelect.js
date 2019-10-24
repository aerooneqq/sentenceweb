import React, {Component} from "react"; 
import ReactDOM from "react-dom";

//Styles
import "./BranchSelectStyles.css";

//Images
import downArrowIcon from "./img/down_arrow.svg";

//Components
import BranchOption from "./BranchOption/BranchOption";

export default class BranchSelect extends Component {
    constructor(props) { 
        super(props);

        this.state = { 
            selectedOptionID: 0,
            areOptionsVisible: false
        }

        this.onArrowClick = this.onArrowClick.bind(this);
        this._getOptionsClass = this._getOptionsClass.bind(this);
        this.toggleRotationClassToArrow = this.toggleRotationClassToArrow.bind(this);
        this.toggleBackRotationClassToArrow = this.toggleBackRotationClassToArrow.bind(this);
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

    render() { 
        return ( 
            <div className = "branchSelect">
                <div className = "branchSelectHeader">
                    <div className = "branchHeaderText">
                        Branch
                    </div>
                    <div className = "currentlySelectedOption" onClick = {this.onArrowClick}>
                        Test selected option
                    </div>
                    <div className = "arrowIconContainer" onClick = {this.onArrowClick}>
                        <img className = "dropDownArrowIcon" src={downArrowIcon} width="16" height="16" alt="The drop-down arrow" />
                    </div>
                </div>
                <div className = {this._getOptionsClass()}>
                    <BranchOption />
                    <BranchOption />
                </div>
            </div>
        )
    }
}