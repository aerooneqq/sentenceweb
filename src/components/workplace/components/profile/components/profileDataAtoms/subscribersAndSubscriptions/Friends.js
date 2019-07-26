import React, {Component, lazy} from "react";

//Styles
import "./styles/FriendsStyles.css";

//Components
const SubHeader = lazy(() => import("./SubHeader"));
const FriendsSearch = lazy(() => import("./FriendsSearch"));
const Follower = lazy(() => import("./Follower"));

export default class Friends extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){ 
        return (
            <div id = "friendsContainer">
                <SubHeader />
                <FriendsSearch />
                <div id = "friendsScrollViewer">
                    <Follower />
                    <Follower />
                    <Follower />
                    <Follower />
                    <Follower />
                    <Follower />
                </div>
            </div>
        )
    }
}