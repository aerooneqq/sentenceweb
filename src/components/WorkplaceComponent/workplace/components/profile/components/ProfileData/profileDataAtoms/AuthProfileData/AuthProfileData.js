import React, {Component, lazy} from "react"

import Loader from "../../../../../../../../loader/Loader";

//Services
import ProfileDataElementModel from "../ProfileDataElementModel";
import { alertAppMessage } from "../../../../../../../../ApplicationMessage/ApplicationMessageManager";

const ProfileTextBox = lazy(() => import("../ProfileTextBox/ProfileTextBox"));
const SaveChanges = lazy(() => import("../SaveChanges/SaveChanges"));
const DiscardChanges = lazy(() => import("../DiscardChanges/DiscardCahanges"));

export default class AuthProfileData extends Component{ 
    constructor(props){ 
        super(props);

        this.state = { 
            isUpdating: true
        }

        this.authElementModel = new ProfileDataElementModel(["email", "login"]);

        this.saveChanges = this.saveChanges.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() { 
        this.authElementModel.getData(
        () => { 
            this.setState({ 
                isUpdating: false
            });
        }, 
        () => { 
            this.setState({ 
                isUpdating: false
            });
        })
    }

    updateData = (property, value) => this.authElementModel.udpateData(property, value);

    saveChanges = () => { 
        this.setState({
            isUpdating: true
        });

        this.authElementModel.udpateUser(() => {
            this.setState({ 
                isUpdating: false
            });

            alertAppMessage("The data was updated.", "success");
        }, (er) => { 
            this.setState({ 
                isUpdating: false
            });

            if (er.response) { 
                alertAppMessage(er.response.data, "error");
            }
        });
    }

    render(){ 
        return this.state.isUpdating === true ? <Loader message = "Loading data..."/> : ( 
            <div className="fadeInAnimation" className="profileDataContentCont">
                <div className="textBlock">          
                    <ProfileTextBox propertyName = "Login" 
                                    propertyDescription = "This is your nickname which can be seen by other users."
                                    propertyValue = {this.authElementModel.data.login}
                                    updateData = {this.updateData}/>
                </div>
                <div className="textBlock">          
                    <ProfileTextBox propertyName = "Email"
                                    propertyDescription = "This is your main email, which is connected to your account."
                                    propertyValue = {this.authElementModel.data.email}
                                    updateData = {this.updateData}/>
                </div>
                <div className = "saveOrDiscardChangesCont">
                    <SaveChanges saveChanges = {this.saveChanges}/>
                    <DiscardChanges />
                </div>
            </div>
        )
    }
}