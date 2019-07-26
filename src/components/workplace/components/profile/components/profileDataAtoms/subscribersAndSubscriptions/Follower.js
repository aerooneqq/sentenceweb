import React, {Component} from "react";

export default class Follower extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){ 
        return (
            <div>
                <div className = "friendsListUserPhoto">
                </div>

                <div className = "friendsListUserInfo">
                    <div className = "friendsListUserName">
                    </div>
                    <div className = "friendsListUserBirthDate">
                    </div>
                </div>
            </div>
        );
    }
}