import React, {Component} from "react";

//Styles
import "./UserActivitySingleDataStyles.css";

//Icons
import singleActivityData from "./img/single_user_activity_data_icon.png";

//Services
import DateService from "../../../../../../../../../../services/Dates/DateService";

/**
 * PROPS LIST:
 * 1) activity - object which represents the activity
 */
export default class UserActivitiesSingleData extends Component { 

    render() { 
        return ( 
            <div className = "singleActivityDataContainer">
                <div className = "singleActivityDataIconCont">
                    <img className = "singleActivityDataIcon" src = {singleActivityData} alt = "Activity icon" />
                </div>
                <div className = "activityInfoContainer">
                    <div className = "singleActivityName">
                        {this.props.activity.activity}
                    </div>
                    <div className = "singleActivityTime">
                        {new DateService(this.props.activity.activityDate).getTime()}
                    </div>
                </div>
            </div>
        )
    }
}