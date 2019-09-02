import React, {Component, lazy} from "react"


import Loader from "../../../../../../../../loader/Loader";
import ProfileDataElementModel from "../ProfileDataElementModel";
import { alertAppMessage } from "../../../../../../../../ApplicationMessage/ApplicationMessageManager";

const ProfileTextBox = lazy(() => import("../ProfileTextBox/ProfileTextBox"));
const SaveChanges = lazy(() => import("../SaveChanges/SaveChanges"));
const DiscardChanges = lazy(() => import("../DiscardChanges/DiscardCahanges"));

export default class LocationData extends Component { 

    constructor(props) { 
        super(props);

        this.state = { 
            isUpdating: true
        };

        this.locationDataModel = new ProfileDataElementModel(["country", "city"]);

        this.saveChanges = this.saveChanges.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() { 
        this.locationDataModel.getData(() => { 
            this.setState({ 
                isUpdating: false
            })
        }, () => { 
            this.setState({ 
                isUpdating: false
            })
        });
    }

    updateData = (property, value) => { 
        this.locationDataModel.udpateData(property, value);
    }

    /**
     * Saves the current changes by calling a user service's method to send a put reqeust to 
     * the api. 
     */
    saveChanges = () => { 
        this.setState({ 
            isUpdating: true
        });

        this.locationDataModel.udpateUser(res => { 
            this.setState({ 
                isUpdating: false
            });

            alertAppMessage("The data was updated.", "success");
        }, er => { 
            this.setState({ 
                isUpdating: false
            });

            if (er.response) { 
                alertAppMessage(er.response.data);
            }
        })
    }

    render() {
        return this.state.isUpdating === true ? <Loader message = "Loading data..." /> :
            (
                <div className="fadeInAnimation profileDataContentCont">
                    <div className="textBlock">          
                    <ProfileTextBox propertyName = "Country" 
                                    propertyDescription = "This is your country."
                                    propertyValue = {this.locationDataModel.data.country}
                                    updateData = {this.updateData}/>
                    </div>
                    <div className="textBlock">          
                    <ProfileTextBox propertyName = "City" 
                                    propertyDescription = "This is your city."
                                    propertyValue = {this.locationDataModel.data.city}
                                    updateData = {this.updateData}/>
                    </div>
                    <div className = "saveOrDiscardChangesCont">
                        <SaveChanges saveChanges = {this.saveChanges} />
                        <DiscardChanges />
                    </div>
                </div>
            );
    }
}