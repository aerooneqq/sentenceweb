import React, {Component} from "react";

//Styles
import "./SubHeaderStyles.css";

/**
 * PROPS LIST:
 * 1) changeUserFriendMode
 */
export default class SubsHeader extends Component{ 
    constructor(props){ 
        super(props);

        this.changeFriendModeToSubscribers = this.changeFriendModeToSubscribers.bind(this);
        this.changeFriendModeToSubscriptions = this.changeFriendModeToSubscriptions.bind(this);
        this.changeFrinedsMode = this.changeFriendsMode.bind(this);
    }

    changeFriendsMode(newStatus) { 
        this.props.changeUserFriendsMode(newStatus);
    }

    changeFriendModeToSubscribers() { 
        this.changeFrinedsState("subscribers");

        document.getElementById("subscribersHeader").classList
            .toggle("subHeaderOptionTitleClicked");
        document.getElementById("subscriptionsHeader").classList
            .remove("subHeaderOptionTitleClicked");
    }

    changeFriendModeToSubscriptions() { 
        this.changeFrinedsState("subscriptions");

        document.getElementById("subscribersHeader").classList
            .remove("subHeaderOptionTitleClicked");
        document.getElementById("subscriptionsHeader").classList
            .toggle("subHeaderOptionTitleClicked");
    }

    render(){ 
        return( 
            <div id = "subHeader">
                <div id = "subscribers" 
                     className = "subHeaderOption"
                     onClick = {this.changeFriendModeToSubscribers}>
                    <div id = "subscribersHeader" className = "subHeaderOptionTitle">Subscribers</div>
                    <div className = "subHeaderOptionHighlighter" />
                </div>
                <div id = "subscriptions" 
                     className = "subHeaderOption"
                     onClick = {this.changeFriendModeToSubscriptions}>
                    <div id = "subscriptionsHeader" className = "subHeaderOptionTitle">Subscriptions</div>
                    <div className = "subHeaderOptionHighlighter" />
                </div>
            </div>
        );
    }
}