import React, {Component, lazy} from "react"

const CareerStage = lazy(() => import("../CareerStage/CareerStage"));

export default class CareerData extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        let careerStages = this.props.user.careerStages;
        let careerComponents = [];

        for (let i = 0; i < careerStages.length; i++){
            careerComponents.push(<CareerStage careerStage = {careerStages[i]} 
                changeUpdatedUser = {this.props.changeUpdatedUser} />)
        }

        return(
            <div className="fadeInAnimation" className="profileDataContentCont">
                {careerComponents}
            </div>
        )
    }
}