import React, {Component} from "react"

//Styles
import "./UserActivityDataStyles.css"

//Icons
import closeIconStatic from "./img/close_user_activity_data_icon.png";
import closeIconActive from "./img/close_user_activity_data_icon_active.png"
import UserActivitiesSingleData from "./UserActivitySingleData/UserActivitySingleData";

/**
 * PROPS LIST:
 * 1) activityData
 * 2) closeActivityData - hides the activity data
 */
export default class UserActivityData extends Component { 

    constructor(props) { 
        super(props);

        this.state = { 
            isCloseIconActive: false
        };

        this.onCloseIconMouseEnter = this.onCloseIconMouseEnter.bind(this);
        this.onCloseIconMouseLeave = this.onCloseIconMouseLeave.bind(this);
    }

    onCloseIconMouseEnter() { 
        this.setState({ 
            isCloseIconActive: true
        });
    }

    onCloseIconMouseLeave() { 
        this.setState({ 
            isCloseIconActive: false
        });
    }
    
    render() { 
        return ( 
            <div className = "userActivityData">
                <div className = "userActivityDataHeaderCont">
                    <div className = "userActivityDataHeaderText">
                        Activity data
                    </div>
                    <div className = "userActivityDataFill" />
                    <div className = "userActivityDataHeaderIcon">
                        <img src = {this.state.isCloseIconActive === true ? closeIconActive : closeIconStatic } 
                             alt = "Close"
                             className = "closeUserActivityIcon"
                             onMouseEnter = {this.onCloseIconMouseEnter}
                             onMouseLeave = {this.onCloseIconMouseLeave}
                             onClick = {this.props.closeActivityData} />
                    </div>
                </div>
                
                <div className = "singleUserActivitiesCont">
                    {this.props.activityData.activities.map(activityInfo => <UserActivitiesSingleData activity = {activityInfo}/>)}
                </div>
            </div>
        )
    }
}