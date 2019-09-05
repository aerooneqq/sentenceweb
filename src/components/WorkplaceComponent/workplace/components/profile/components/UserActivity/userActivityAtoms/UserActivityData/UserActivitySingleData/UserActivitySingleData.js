import React, {Component} from "react";

//Styles
import "./UserActivitySingleDataStyles.css";

<<<<<<< HEAD
=======
//Icons
import singleActivityData from "./img/single_user_activity_data_icon.png";

//Services
import DateService from "../../../../../../../../../../services/Dates/DateService";

>>>>>>> 9b3a955071199d77b81675b009925dd3f49572f5
export default class UserActivitiesSingleData extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
<<<<<<< HEAD
        return (
            <div className = "singleUserActivityDataCont">
                <div className = "activityName">
                    {this.props.activity.activity}
                </div>
                <div className = "activityDate">
                    {this.props.activity.activityDate}
=======
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
>>>>>>> 9b3a955071199d77b81675b009925dd3f49572f5
                </div>
            </div>
        )
    }
}