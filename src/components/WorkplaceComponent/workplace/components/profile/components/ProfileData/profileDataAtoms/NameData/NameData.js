import React, {Component, lazy} from "react"

const ProfileTextBox = lazy(() => import("../ProfileTextBox/ProfileTextBox"));
const SaveChanges = lazy(() => import("../SaveChanges/SaveChanges"));
const DiscardChanges = lazy(() => import("../DiscardChanges/DiscardCahanges"));

export default class NameData extends Component{ 
    render(){ 
        let user = this.props.user;

        return(
            <div className="fadeInAnimation" className="profileDataContentCont">
                <div className="textBlock">          
                    <ProfileTextBox propertyName = "Name" 
                                    propertyDescription = "This is your name."
                                    propertyValue = {user.name}
                                    changeUpdatedUser = {this.props.changeUpdatedUser}/>
                </div>
                <div className="textBlock">          
                    <ProfileTextBox propertyName = "Surname" 
                                    propertyDescription = "This is your surname."
                                    propertyValue = {user.surname}
                                    changeUpdatedUser = {this.props.changeUpdatedUser}/>
                </div>
                <div className="textBlock">          
                    <ProfileTextBox propertyName = "MiddleName" 
                                    propertyDescription = "This is your middle name."
                                    propertyValue = {user.middleName}
                                    changeUpdatedUser = {this.props.changeUpdatedUser}/>
                </div>
                <div className = "saveOrDiscardChangesCont">
                    <SaveChanges />
                    <DiscardChanges />
                </div>
            </div>
        )
    }
}