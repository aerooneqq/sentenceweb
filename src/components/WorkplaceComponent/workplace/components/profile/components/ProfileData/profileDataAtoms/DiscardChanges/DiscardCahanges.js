import React, {Component} from "react"

//Styles
import "./DiscardChangesStyles.css"

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
                Discard changes (in all containers)
            </div>
        );
    }
}