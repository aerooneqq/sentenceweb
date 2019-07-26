import React, {Component} from "react";

//Sryles
import "./styles/SubHeaderStyles.css";

export default class SubsHeader extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){ 
        return( 
            <div id = "subHeader">
                <div id = "subscribersOption" className = "subHeaderOption">
                    <div className = "subHeaderOptionTitle">Subscribers</div>
                    <div className = "subHeaderOptionHighlighter" />
                </div>
                <div id = "subscriptionOption" className = "subHeaderOption">
                    <div className = "subHeaderOptionTitle">Subscriptions</div>
                    <div className = "subHeaderOptionHighlighter" />
                </div>
            </div>
        )
    }
}