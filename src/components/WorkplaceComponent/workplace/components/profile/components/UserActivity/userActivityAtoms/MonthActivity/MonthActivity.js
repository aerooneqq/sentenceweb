import React, {Component, lazy} from "react"

import "./MonthActivityStyles.css"

//Components
import MonthActivityModel from "./MonthActivityModel";
import UserActivityData from "../UserActivityData/UserActivityData";

export default class MonthActivity extends Component{ 

    constructor(props) { 
        super(props);

        this.showUserActivityData = this.showUserActivityData.bind(this);
        this.closeActivityData = this.closeActivityData.bind(this);

        this.state = {
            trList: new MonthActivityModel(props.activitiesData, 
                                           props.daysCount,
                                           props.month.firstDayNum)
                                           .getActivitiesTable(this.showUserActivityData),
            isExtraDataVisible: false,
            extraData: null
        }
    }

    showUserActivityData(data) { 
        this.setState({ 
            isExtraDataVisible: true,
            extraData: data
        });
    }

    closeActivityData() { 
        this.setState({ 
            isExtraDataVisible: false,
            extraData: null
        });
    }

    render() {
        return(
            <div className = "monthActivityCont">
                <div className = "calendarContainer">
                    <div className = "monthNameCont">{this.props.month.name}</div>
                    <table>
                        {this.state.trList}
                    </table>
                </div>
                {this.state.isExtraDataVisible === true ? 
                <div className = "userActivityDataContainer userActivityDataContFadeIn">
                    <UserActivityData closeActivityData = {this.closeActivityData} />
                </div> : null}
            </div>
        )
    }
}