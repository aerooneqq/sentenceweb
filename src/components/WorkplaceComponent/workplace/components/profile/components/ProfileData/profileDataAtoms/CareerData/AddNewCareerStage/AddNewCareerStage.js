import React, {Component} from "react";

//Styles
import "./AddNewCareerStageStyles.css";

//Images
import addNewCareerStageIcon from "./img/add_new_career_stage.png";

export default class AddNewCareerStage extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <button id = "addNewCareerStage" onClick = {this.props.onAdd}>
                <img id = "addNewCareerStageBtnIcon" src = {addNewCareerStageIcon}
                     alt = "Add" />
                <div id = "addNewCareerStageBtnText">Add</div>
            </button>
        )
    }
}