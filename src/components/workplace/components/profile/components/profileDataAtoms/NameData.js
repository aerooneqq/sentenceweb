import React, {Component, lazy} from "react"

const ProfileTextBox = lazy(() => import("./ProfileTextBox"));

export default class NameData extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){ 
        let user = this.props.user;

        return(
            <div className="fadeInAnimation">
            <div className="textBlock">          
            <ProfileTextBox propertyName = "Name" 
                            propertyDescription = "This is your name."
                            propertyValue = {user.name}/>
            </div>
            <div className="textBlock">          
            <ProfileTextBox propertyName = "Surname" 
                            propertyDescription = "This is your surname."
                            propertyValue = {user.surname}/>
            </div>
            <div className="textBlock">          
            <ProfileTextBox propertyName = "MiddleName" 
                            propertyDescription = "This is your middle name."
                            propertyValue = {user.middleName}/>
            </div>
        </div>
        )
    }
}