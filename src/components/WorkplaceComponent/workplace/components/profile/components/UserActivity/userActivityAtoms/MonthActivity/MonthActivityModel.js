import React from "react";

import SingleUserActivity from "../SingleUserActivity/SingleUserActivity";
import { ETIMEDOUT } from "constants";

export default class MonthActivityModel { 
    days = ["Mn", "Tu", "Wd", "Th", "Fr", "St", "Sn"];

    constructor(activities, daysCount, firstDayNum) { 
        this._activities = activities;
        this._daysCount = daysCount;
        this._firstDayNum = firstDayNum;
    }

    getActivitiesTable(singleActivityClickFunc) { 
        let trList = [];
        let tdList = [];

        for (let i = 0; i < this.days.length; i++) { 
            tdList.push(<td> {this.days[i]} </td>)
        }

        trList.push(<tr className="dayName">{tdList}</tr>)

        tdList = []

        for (let i = 0; i < this._daysCount + this._firstDayNum; i++) {
            if (i % 7 === 0) {
                trList.push(<tr>{tdList}</tr>);
                tdList = []
            } 
            if (i < this._firstDayNum) { 
                tdList.push(<td></td>)
            }
            else { 
                tdList.push(
                    <td>
                        <SingleUserActivity activityData = {this._activities[i - this._firstDayNum]} 
                                            handleSingleUserActivityClick = {singleActivityClickFunc}/>
                    </td>)
            }
        }

        trList.push(<tr>{tdList}</tr>)

        return trList;
    }

}