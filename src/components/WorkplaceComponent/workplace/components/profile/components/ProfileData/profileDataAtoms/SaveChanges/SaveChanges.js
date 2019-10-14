import React, {Component} from "react";

//Styles
import "./SaveChangesStyles.css";

/**
 * PROPS LIST:
 * 1) saveChanges
 */
export default class SaveChanges extends Component { 
    constructor(props) { 
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() { 
        this.props.saveChanges();
    }

    render() { 
        return(
            <button id = "saveChangesBtn" onClick={this.handleClick}>
                <div id = "saveChangesBtnIcon"></div>    
                <div id = "saveChangesBtnText">Save</div>
            </button>
        );
    }
}