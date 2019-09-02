import React, {Component, lazy} from "react"

//Styles
import "./CareerStageStyles.css"

//Icons
import editCareerStageIcon from "./img/edit_career_stage_icon.png";
import deleteCareerStageIcon from "./img/delete_career_stage_icon.png"

//Components
import CareerStageInput from "./CareerStageInput/CareerStageInput";
import SaveChangesInCareerStage from "./SaveCangesInCareerStages/SaveChangesInCareerStage";

export default class CareerStage extends Component{ 
    constructor(props) { 
        super(props);

        this.state = { 
            isEdditing: false,
        };

        this.updateCareerStage = this.updateCareerStage.bind(this);
        this.switchToEditMode = this.switchToEditMode.bind(this);
        this.handleSaveBtnClick = this.handleSaveBtnClick.bind(this);
        this.deleteCareerStage = this.deleteCareerStage.bind(this);
    }

    updateCareerStage(property, value) { 
        this.props.updateCareerStage(this.props.index, property, value);
    }

    switchToEditMode() { 
        this.setState({ 
            isEdditing: true
        });
    }

    handleSaveBtnClick() { 
        this.setState({ 
            isEdditing: false
        });
    }

    deleteCareerStage() { 
        this.props.deleteCareerStage(this.props.index);
    }

    render(){
        let job = this.props.careerStage.job;
        let company = this.props.careerStage.company;
        let startYear = this.props.careerStage.startYear;
        let finishYear = this.props.careerStage.finishYear;
        let description = this.props.careerStage.description;
        
        return (
            this.state.isEdditing === true ? 
                <div className = "careerStageContatiner">
                    <div className = "careerStageJobName">
                        <CareerStageInput helperText = "Job name"
                                          value = {job}
                                          updateCareerStage = {this.updateCareerStage}
                                          propertyName = "job"/>
                    </div>
                    <CareerStageInput helperText = "Company"
                                      value = {company}
                                      updateCareerStage = {this.updateCareerStage}
                                      propertyName = "company"/>
                    <div className = "careerStageCompanyName">
                        <CareerStageInput helperText = "Start year" size = "small"
                                          value = {startYear}
                                          updateCareerStage = {this.updateCareerStage}
                                          propertyName = "startYear"/>

                        <CareerStageInput helperText = "Finish year" size = "small"
                                          value = {finishYear}
                                          updateCareerStage = {this.updateCareerStage}
                                          propertyName = "finishYear"/>
                    </div>
                    <div className = "careerStageDescription">
                         <CareerStageInput helperText = "Description"
                                           value = {description}
                                           updateCareerStage = {this.updateCareerStage}
                                           propertyName = "description"/>
                    </div>
                    <SaveChangesInCareerStage handleSaveBtnClick = {this.handleSaveBtnClick}/>
                </div> 
                :
                <div className = "careerStageContatiner">
                    <div className = "careerStageTopLine">
                        <div className = "careerStageJobName">
                            {job}
                        </div>
                        <img className = "careerStageIcon" src = {editCareerStageIcon} 
                             alt = "Edit" onClick = {this.switchToEditMode}/>
                        <img className = "careerStageIcon" src = {deleteCareerStageIcon} 
                             alt = "Delete" onClick = {this.deleteCareerStage}/>
                    </div>

                    <div className = "careerStageCompanyName">
                        {company} ({startYear} - {finishYear})
                    </div>
                    <div className = "careerStageDescription">
                        {description}
                    </div>
                </div> 
        )
    }
}