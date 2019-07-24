import React, {Component} from "react"
import "./styles/CareerStageStyles.css"


export default class CareerStage extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){
        let job = this.props.careerStage.job;
        let company = this.props.careerStage.company;
        let startYear = this.props.careerStage.startYear;
        let finishYear = this.props.careerStage.finishYear;
        let description = this.props.careerStage.description;
        
        return(
            <div className = "careerStageContatiner">
                <div className = "careerStageCompanyName">
                    {company}
                </div>
                <div className = "careerStageJobName">
                    {job}
                </div>
                <div className = "careerStageDescription">
                    {description}
                </div>
                <div className = "careerStageDuration">
                    {startYear} - {finishYear}
                </div>
            </div>
        )
    }
}