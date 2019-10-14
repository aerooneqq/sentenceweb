import React, {Component} from "react"

//Styles
import "./DiscardChangesStyles.css"

/**
 * PROPS LIST:
 * 1) discardChangesInProfileData - the function which discards the changes in profile data.
 */
export default class DiscardChanges extends Component{ 
    constructor(props){ 
        super(props);

        this.handleDiscardChangesBtnClick = this.handleDiscardChangesBtnClick.bind(this);
    }

    handleDiscardChangesBtnClick(){ 
        this.props.discardChangesInProfileData();
    }

    render(){ 
        return(
            <div id = "discardChangesCont" onClick={this.handleDiscardChangesBtnClick}>
                Discard changes
            </div>
        );
    }
}