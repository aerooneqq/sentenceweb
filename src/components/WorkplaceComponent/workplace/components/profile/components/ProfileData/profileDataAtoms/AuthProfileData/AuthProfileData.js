import React, {Component, lazy} from "react"

const ProfileTextBox = lazy(() => import("../ProfileTextBox/ProfileTextBox"));
const SaveChanges = lazy(() => import("../SaveChanges/SaveChanges"));
const DiscardChanges = lazy(() => import("../DiscardChanges/DiscardCahanges"));

export default class AuthProfileData extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){ 
        let user = this.props.user;

        return(
            <div className="fadeInAnimation" className="profileDataContentCont">
                <div className="textBlock">          
                    <ProfileTextBox propertyName = "Login" 
                                    propertyDescription = "This is your nickname which can be seen by other users."
                                    propertyValue = {user.login}
                                    changeUpdatedUser = {this.props.changeUpdatedUser}/>
                </div>
                <div className="textBlock">          
                    <ProfileTextBox propertyName = "Email"
                                    propertyDescription = "This is your main email, which is connected to your account."
                                    propertyValue = {user.email}
                                    changeUpdatedUser = {this.props.changeUpdatedUser}/>
                </div>
                <div className = "saveOrDiscardChangesCont">
                    <SaveChanges />
                    <DiscardChanges />
                </div>
            </div>
        );
    }
}