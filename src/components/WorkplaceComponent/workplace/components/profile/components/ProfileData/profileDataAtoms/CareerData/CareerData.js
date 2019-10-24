import React, {Component, lazy} from "react"

import "./CareerData.css"

//Components
import ProfileDataLoader from "../../ProfileDataLoader/ProfileDataLoader";
import CareerStage from "./CareerStage/CareerStage";
import Loader from "../../../../../../../../loader/Loader";
import SaveChanges from "../SaveChanges/SaveChanges";
import DiscardChanges from "../DiscardChanges/DiscardCahanges";
import ProfileDataElementModel from "../ProfileDataElementModel";

//App messages
import {alertAppMessage} from "../../../../../../../../ApplicationMessage/ApplicationMessageManager";
import AddNewCareerStage from "./AddNewCareerStage/AddNewCareerStage";

export default class CareerData extends Component { 

    constructor(props) { 
        super(props);

        this.state = { 
            isUpdating: true,
        };

        this.careerDataModel = new ProfileDataElementModel(["careerStages"]);
        
        this.addNewCareerStage = this.addNewCareerStage.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.updateCareerStage = this.updateCareerStage.bind(this);
        this.deleteCareerStage = this.deleteCareerStage.bind(this);
    }

    componentDidMount() { 
        this.careerDataModel.getData(() => { 
            this.setState({ 
                isUpdating: false,
                isFirstLoad: false
            });
        }, (er) => { 
            this.setState({ 
                isUpdating: false,
                isFirstLoad: false
            });

            if (er.response) { 
                alertAppMessage(er.response.data)
            }
        })
    }

    addNewCareerStage() { 
        this.setState( { 
            isUpdating: true
        });

        if (this.careerDataModel.data.careerStages === null) { 
            this.careerDataModel.data.careerStages = []
        }

        this.careerDataModel.data.careerStages.push({ 
            company: "",
            job: "",
            description: "",
            startYear: "",
            finishYear: ""
        });

        this.setState({ 
            isUpdating: false
        });
    }

    saveChanges() { 
        this.setState({ 
            isUpdating: true
        });

        this.careerDataModel.udpateUser(() => { 
            alertAppMessage("The career data was updated.", "success");

            this.setState({ 
                isUpdating: false
            });
        }, er => { 
            if (er.response) { 
                alertAppMessage(er.response.data, "error");
            }
            
            this.setState({ 
                isUpdating: false
            });
        });
    }

    updateCareerStage(index, property, value) { 
        this.careerDataModel.data.careerStages[index][property] = value;  
    }

    deleteCareerStage(index) { 
        let newStages = [];

        for (let i = 0; i < this.careerDataModel.data.careerStages.length; i++) { 
            if (i !== index) { 
                newStages.push(this.careerDataModel.data.careerStages[i])
            }
        }

        this.careerDataModel.data.careerStages = newStages;
        
        this.setState({ 
            isUpdating: false
        });
    }

    render() { 
        let index = 0;

        return(
            <div>
                <div className="careerStagesOutterContainer fadeInAnimation">
                    {this.props.isFirstLoad === true ? <ProfileDataLoader /> :
                     this.state.isUpdating === true ? <Loader message = "Loading data..." /> :
                     this.careerDataModel.data.careerStages !== null ? 
                     this.careerDataModel.data.careerStages.map(careerStage => 
                         <CareerStage careerStage = {careerStage} 
                                      index = {index++}
                                      updateCareerStage = {this.updateCareerStage}
                                      deleteCareerStage = {this.deleteCareerStage} />) : null 

                    }
                </div>
                <div className = "saveOrDiscardChangesCont">
                    <div className="careerStagesBtns">
                        <AddNewCareerStage onAdd = {this.addNewCareerStage}/>
                        <SaveChanges saveChanges = {this.saveChanges}/>
                    </div>
                    <DiscardChanges />
                </div>
            </div>
        )
    }
}