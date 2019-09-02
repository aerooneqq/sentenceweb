import React, {Component} from "react"

import "./SaveChangesInCareerStageStyles.css"

export default class SaveChangesInCareerStage extends Component { 

    constructor(props) { 
        super(props);

        this.onSaveBtnClick = this.onSaveBtnClick.bind(this);
    }

    onSaveBtnClick() { 
        this.props.handleSaveBtnClick();
    }

    render() { 
        return ( 
            <button className = "saveChangesInCareerStages" 
                    onClick = {this.onSaveBtnClick}>
                Save
            </button>
        )
    }

}