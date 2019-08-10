import React, {Component, lazy} from "react"

import "./CareerData.css"

import UserService from "../../../../../../../../../services/userServices/UserService";
import Loader from "../../../../../../../../loader/Loader";
import SaveChanges from "../SaveChanges/SaveChanges";
import DiscardChanges from "../DiscardChanges/DiscardCahanges";
import ProfileDataElementModel from "../ProfileDataElementModel";

const CareerStage = lazy(() => import("../CareerStage/CareerStage"));

export default class CareerData extends Component { 

    constructor(props) { 
        super(props);

        this.state = { 
            isUpdating: true
        };

        this.careerDataModel = new ProfileDataElementModel(["careerStages"]);
    }

    componentDidMount() { 
        this.careerDataModel.getData(() => { 
            this.setState({ 
                isUpdating: false
            })
        }, () => { 
            this.setState({ 
                isUpdating: false
            })
        })
    }


    render() { 
        return(
            <div>
                <div className="fadeInAnimation" className="profileDataContentCont">
                    {this.state.isUpdating === true ? <Loader message = "Loading data..." /> :
                     this.careerDataModel.data.careerStages.map(careerStage => 
                        <CareerStage careerStage = {careerStage}/> 
                    )}
                </div>
                <div className = "saveOrDiscardChangesCont">
                    <SaveChanges saveChanges = {this.saveChanges}/>
                    <DiscardChanges />
                </div>
            </div>
        )
    }
}