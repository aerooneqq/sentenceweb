import React, {Component, lazy} from "react"

const ProfileTextBox = lazy(() => import("./ProfileTextBox"));

export default class LocationData extends Component{ 
    constructor(props){ 
        super(props);
    }


    render(){
        let user = this.props.user;

        return(
            <div className="fadeInAnimation">
                <div className="textBlock">          
                <ProfileTextBox propertyName = "Country" 
                                propertyDescription = "This is your country."
                                propertyValue = {user.country}
                                changeUpdatedUser = {this.props.changeUpdatedUser}/>
                </div>
                <div className="textBlock">          
                <ProfileTextBox propertyName = "City" 
                                propertyDescription = "This is your city."
                                propertyValue = {user.city}
                                changeUpdatedUser = {this.props.changeUpdatedUser}/>
                </div>
            </div>
        ) 
    }
}