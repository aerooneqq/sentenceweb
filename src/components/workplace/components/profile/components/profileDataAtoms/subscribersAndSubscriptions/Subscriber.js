import React, {Component, lazy} from "react";

//Styles
import "./styles/FollowerStyles.css";

//Components
const DeleteSubBtn = lazy(() => import("./DeleteSubBtn"));
const ViewUserPageBtn = lazy(() => import("./ViewUserPageBtn"));

export default class Subscriber extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){  
            return (
                <div className = "friendsListContainer">
                    <div className = "friendsListUserPhoto">
                    </div>
    
                    <div className = "friendsListUserInfo">
                        <div className = "friendsListUserName">
                            {this.props.subscriber.name}
                        </div>
                        <div className = "friendsListUserBirthDate">
                            {this.props.subscriber.birthDate}
                        </div>
                        <div class = "friendsListUserBtns">
                            <DeleteSubBtn />
                            <ViewUserPageBtn />
                        </div>
                    </div>
                </div>
            );
    }
}