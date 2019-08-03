import React, {Component, lazy} from "react";

//Styles
import "../Subscriber/SubscriberStyles.css"

//Components
const SubscribeBtn = lazy(() => import("../SubscribeBtn/SubscribeBtn"));

export default class UserSearchResult extends Component { 
    constructor(props){ 
        super(props);
    }

    render(){ 
        let date = this.props.searchResult.birthDate;
        date = date.substr(0, 4) + "-" + date.substr(5, 2) + "-" + date.substr(8, 2);

        return (
            <div className = "friendsListContainer">
                <div className = "friendsListUserPhoto">
                </div>

                <div className = "friendsListUserInfo">
                    <div className = "friendsListUserName">
                        {this.props.searchResult.name}
                    </div>
                    <div className = "friendsListUserBirthDate">
                        {date}
                    </div>
                    <div class = "friendsListUserBtns">
                        <SubscribeBtn subscribe = {this.props.subscribe} 
                                      userID = {this.props.searchResult.userID}/>
                    </div>
                </div>
            </div>
        );
    }
} 