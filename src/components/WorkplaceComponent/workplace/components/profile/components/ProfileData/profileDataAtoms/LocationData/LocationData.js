import React, {Component, lazy} from "react"

//Models
import ProfileDataElementModel from "../ProfileDataElementModel";

//Application messages
import { alertAppMessage } from "../../../../../../../../ApplicationMessage/ApplicationMessageManager";

//Components
import Loader from "../../../../../../../../loader/Loader";
import ProfileTextBox from "../ProfileTextBox/ProfileTextBox";
import SaveChanges from "../SaveChanges/SaveChanges";
import DiscardChanges from "../DiscardChanges/DiscardCahanges";
import ProfileDataLoader from "../../ProfileDataLoader/ProfileDataLoader";

export default class LocationData extends Component { 

    constructor(props) { 
        super(props);

        this.state = { 
            isUpdating: true
        };

        this.locationDataModel = new ProfileDataElementModel(["country", "city"]);

        this.saveChanges = this.saveChanges.bind(this);
        this.updateData = this.updateData.bind(this);
        this.discardChanges = this.discardChanges.bind(this);
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

    discardChanges() { 
        this.setState(() =>{
            return { 
                isUpdating: true
            }
        }, () => setTimeout(() => { 
                this.locationDataModel.discardChanges();

                this.setState(() =>{
                    return { 
                        isUpdating: false
                    }
                });
            }, 100));
    }

    render() {
        return this.props.isFirstLoad === true ? <ProfileDataLoader /> : 
            this.state.isUpdating === true ? <Loader message = "Loading data..." /> :
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
                        <DiscardChanges discardChangesInProfileData = {this.discardChanges}/>
                    </div>
                </div>
            );
    }
}