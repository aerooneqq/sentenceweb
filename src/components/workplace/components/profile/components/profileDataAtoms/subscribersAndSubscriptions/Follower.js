import React, {Component, lazy} from "react";

//Styles
import "./styles/FollowerStyles.css";

//Components
const DeleteSubBtn = lazy(() => import("./DeleteSubBtn"));
const ViewUserPageBtn = lazy(() => import("./ViewUserPageBtn"));
const Loader = lazy(() => import("../../../../../../loader/Loader"));

export default class Follower extends Component{ 
    constructor(props){ 
        super(props);

        this.state = { 
            isLoading: false
        };
    }

    render(){ 
        if (this.state.isLoading === true){ 
            return(
                <div className = "friendsUserListLoaderCont">
                    <Loader message = "Loading user data"/>
                </div>
            )
        }
        else { 
            return (
                <div className = "friendsListContainer">
                    <div className = "friendsListUserPhoto">
                    </div>
    
                    <div className = "friendsListUserInfo">
                        <div className = "friendsListUserName">
                            Степанов Евгений
                        </div>
                        <div className = "friendsListUserBirthDate">
                            30.05.2000
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
}