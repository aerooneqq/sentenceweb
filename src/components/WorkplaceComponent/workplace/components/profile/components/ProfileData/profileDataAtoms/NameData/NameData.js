import React, {Component, lazy} from "react"

import ProfileDataElementModel from "../ProfileDataElementModel";
import { alertAppMessage } from "../../../../../../../../ApplicationMessage/ApplicationMessageManager";

//Components
import ProfileDataLoader from "../../ProfileDataLoader/ProfileDataLoader";
import Loader from "../../../../../../../../loader/Loader";
import ProfileTextBox from "../ProfileTextBox/ProfileTextBox";
import SaveChanges from "../SaveChanges/SaveChanges";
import DiscardChanges from "../DiscardChanges/DiscardCahanges";

export default class NameData extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            isUpdating: true,
            isFirstLoad: true
        }

        this.nameDataModel = new ProfileDataElementModel(["name", "surname", "middleName"]);

        this.saveChanges = this.saveChanges.bind(this);
        this.updateData = this.updateData.bind(this);
        this.discardChanges = this.discardChanges.bind(this);
    }

    componentDidMount() { 
        this.nameDataModel.getData(() => { 
            this.setState({ 
                isUpdating: false,
                isFirstLoad: false
            });
        }, er => { 
            this.setState({ 
                isUpdating: false, 
                isFirstLoad: false
            });
        });
    }

    updateData = (property, value) => this.nameDataModel.udpateData(property, value); 

    /**
     * Saves the current changes by calling a user service's method to send a put reqeust to 
     * the api. 
     */
    saveChanges = () => { 
        this.setState({ 
            isUpdating: true
        });

        this.nameDataModel.udpateUser(() => { 
            this.setState({ 
                isUpdating: false
            });
            alertAppMessage("The profile was updated.", "success");
        }, er => { 
            this.setState({ 
                isUpdating: false
            });

            if (er.response) { 
                alertAppMessage(er.response.data, "error");
            }
        });
    }

    discardChanges() { 
        this.setState(() =>{
            return { 
                isUpdating: true,
            }
        }, () => setTimeout(() => { 
                this.nameDataModel.discardChanges();
                this.setState(() =>{
                    return { 
                        isUpdating: false
                    }
                });
            }, 100));
    }

    render() { 
        return  this.state.isFirstLoad === true ? <ProfileDataLoader /> :
                this.state.isUpdating === true ? <Loader message = "Loading data..." /> : ( 
                <div className="fadeInAnimation" className="profileDataContentCont">
                    <div className="textBlock">          
                        <ProfileTextBox propertyName = "Name" 
                                        propertyDescription = "This is your name."
                                        propertyValue = {this.nameDataModel.data.name}
                                        updateData = {this.updateData}/>
                    </div>
                    <div className="textBlock">          
                        <ProfileTextBox propertyName = "Surname" 
                                        propertyDescription = "This is your surname."
                                        propertyValue = {this.nameDataModel.data.surname}
                                        updateData = {this.updateData}/>
                    </div>
                    <div className="textBlock">          
                        <ProfileTextBox propertyName = "MiddleName" 
                                        propertyDescription = "This is your middle name."
                                        propertyValue = {this.nameDataModel.data.middleName}
                                        updateData = {this.updateData}/>
                    </div>
                    <div className = "saveOrDiscardChangesCont">
                        <SaveChanges saveChanges = {this.saveChanges}/>
                        <DiscardChanges discardChangesInProfileData = {this.discardChanges}/>
                    </div>
                </div>
            );
    }
}