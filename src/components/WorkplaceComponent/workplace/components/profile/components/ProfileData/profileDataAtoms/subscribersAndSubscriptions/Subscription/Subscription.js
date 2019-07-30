import React, {Component, lazy} from "react";

//Styles
import "./SubscriptionStyles.css";

//Components
const ViewUserPageBtn = lazy(() => import("../ViewUserPageBtn/ViewUserPageBtn"));
const UnsubscribeBtn = lazy(() => import("../UnsubscribeBtn/UnsubscribeBtn"));

export default class Subscription extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            userID: props.userID
        };
    }

    render() { 
        let date = this.props.subscription.birthDate;
        date = date.substr(0, 4) + "-" + date.substr(5, 2) + "-" + date.substr(8, 2);

        return ( 
            <div className = "subscriptionsListContainer">
                <div className = "subscriptionsListUserPhoto">
                </div>

                <div className = "subscriptionsListUserInfo">
                    <div className = "subscriptionsListUserName">
                        Степанов Евгений
                    </div>
                    <div className = "subscriptionsListUserBirthDate">
                        30.05.2000
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