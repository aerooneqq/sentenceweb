import React, {Component} from "react";

//Styles
import "./UserActivitySingleDataStyles.css";

export default class UserActivitiesSingleData extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <div className = "singleUserActivityDataCont">
                <div className = "activityName">
                    {this.props.activity.activity}
                </div>
                <div className = "activityDate">
                    {this.props.activity.activityDate}
                </div>
            </div>
        )
    }
}