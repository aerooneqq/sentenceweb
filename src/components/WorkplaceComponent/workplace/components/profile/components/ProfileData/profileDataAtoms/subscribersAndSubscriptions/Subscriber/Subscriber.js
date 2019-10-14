import React, {Component, lazy} from "react";

//Styles
import "./SubscriberStyles.css";

//Components
import DeleteSubBtn from "../DeleteSubBtn/DeleteSubBtn";
import ViewUserPageBtn from "../ViewUserPageBtn/ViewUserPageBtn";

/**
 * PROPS LIST:
 * 1) subscriber (birthDate, name, userID),
 * 2) deleteSubscriber
 */
export default class Subscriber extends Component {  
    render() {  
        let date = this.props.subscriber.birthDate;
        date = date.substr(0, 4) + "-" + date.substr(5, 2) + "-" + date.substr(8, 2);

        return (
                <div className = "friendsListContainer">
                    <div className = "friendsListUserPhoto">
                    </div>
    
                    <div className = "friendsListUserInfo">
                        <div className = "friendsListUserName">
                            {this.props.subscriber.name}
                        </div>
                        <div className = "friendsListUserBirthDate">
                            {date}
                        </div>
                        <div class = "friendsListUserBtns">
                            <DeleteSubBtn deleteSubscriber = {this.props.deleteSubscriber}
                                          userID = {this.props.subscriber.userID}/>
                            <ViewUserPageBtn />
                        </div>
                    </div>
                </div>
        );
    }
}