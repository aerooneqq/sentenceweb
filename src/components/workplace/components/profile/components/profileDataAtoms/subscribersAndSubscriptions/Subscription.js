import React, {Component, lazy} from "react";

//Styles
import "./styles/SubscriptionStyles.css";

//Components
const ViewUserPageBtn = lazy(() => import("./ViewUserPageBtn"));

export default class Subscription extends Component{ 
    constructor(props){ 
        super(props);
    }

    render() { 
        return( 
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
                        <ViewUserPageBtn />
                    </div>
                </div>
            </div>
        )
    }
}