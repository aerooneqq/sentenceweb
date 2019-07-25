import React, {Component} from "react"

import "./styles/DiscardChangesCompStyles.css"

export default class DiscardChangesComponent extends Component{ 
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