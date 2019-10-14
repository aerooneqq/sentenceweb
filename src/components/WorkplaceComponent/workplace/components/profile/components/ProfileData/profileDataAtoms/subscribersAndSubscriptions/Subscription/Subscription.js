import React, {Component, lazy} from "react";

//Styles
import "./SubscriptionStyles.css";

//Components
import ViewUserPageBtn from "../ViewUserPageBtn/ViewUserPageBtn";
import UnsubscribeBtn from "../UnsubscribeBtn/UnsubscribeBtn";

/**
 * PROPS LIST: 
 * 1) subscription: {userID, name, birthDate}
 * 2) deleteSubscription
 */
export default class Subscription extends Component { 

    render() { 
        let date = this.props.subscription.birthDate;
        date = date.substr(0, 4) + "-" + date.substr(5, 2) + "-" + date.substr(8, 2);

        return ( 
            <div className = "subscriptionsListContainer">
                <div className = "subscriptionsListUserPhoto">
                </div>

                <div className = "subscriptionsListUserInfo">
                    <div className = "subscriptionsListUserName">
                        {this.props.subscription.name}
                    </div>
                    <div className = "subscriptionsListUserBirthDate">
                        {date}
                    </div>
                    <div class = "subscriptionsListUserBtns">
                        <UnsubscribeBtn deleteSubscription = {this.props.deleteSubscription}
                                        userID = {this.props.subscription.userID}/>
                        <ViewUserPageBtn />
                    </div>
                </div>
            </div>
        )
    }
}