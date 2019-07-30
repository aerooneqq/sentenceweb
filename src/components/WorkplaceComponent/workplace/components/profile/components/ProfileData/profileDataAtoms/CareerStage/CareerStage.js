import React, {Component} from "react"

//Styles
import "./CareerStageStyles.css"


export default class CareerStage extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){
        let job = this.props.careerStage.job;
        let company = this.props.careerStage.company;
        let startYear = this.props.careerStage.startYear.substr(0, 4);
        let finishYear = this.props.careerStage.finishYear.substr(0, 4);
        let description = this.props.careerStage.description;
        
        return(
            <div className = "careerStageContatiner">
                <div className = "careerStageJobName">
                    {job}
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