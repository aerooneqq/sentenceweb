import React, {Component} from "react";

//Styles
import "./styles/SubHeaderStyles.css";

export default class SubsHeader extends Component{ 
    constructor(props){ 
        super(props);

        this.changeFriendModeToSubscribers = this.changeFriendModeToSubscribers.bind(this);
        this.changeFriendModeToSubscriptions = this.changeFriendModeToSubscriptions.bind(this);
    }

    changeFriendModeToSubscribers() { 
        this.props.changeUserFriendMode("subscribers");

        document.getElementById("subscribersHeader").classList
            .toggle("sunHeaderOptionTitleClicked");
        document.getElementById("subscriptionsHeader").classList
            .remove("sunHeaderOptionTitleClicked");
    }

    changeFriendModeToSubscriptions() { 
        this.props.changeUserFriendMode("subscriptions");

        document.getElementById("subscribersHeader").classList
            .remove("sunHeaderOptionTitleClicked");
        document.getElementById("subscriptionsHeader").classList
            .toggle("sunHeaderOptionTitleClicked");
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