import React from "react";

import SingleUserActivity from "../SingleUserActivity/SingleUserActivity";

export default class MonthActivityModel { 
    days = ["Mn", "Tu", "Wd", "Th", "Fr", "St", "Sn"];

    constructor(activities, daysCount, firstDayNum) { 
        this._tdKey = 0;
        this._trKey = 0;

        this._activities = activities;
        this._daysCount = daysCount;
        this._firstDayNum = firstDayNum;
    } 

    getActivitiesTable(singleActivityClickFunc) { 
        let trList = [];
        let tdList = [];

        for (let i = 0; i < this.days.length; i++) { 
            tdList.push(<td key = {this._getTdKey()}> {this.days[i]} </td>)
        }

        trList.push(<tr key = {this._getTrKey()} className="dayName">{tdList}</tr>)

        tdList = []

        for (let i = 0; i < this._daysCount + this._firstDayNum; i++) {
            if (i % 7 === 0) {
                trList.push(<tr key = {this._getTrKey()}>{tdList}</tr>);
                tdList = []
            } 

            if (i < this._firstDayNum) { 
                tdList.push(<td key = {this._getTdKey()}></td>)
            }
            else { 
                tdList.push(
                    <td key = {this._getTdKey()}>
                        <SingleUserActivity activityData = {this._activities[i - this._firstDayNum]} 
                                            handleSingleUserActivityClick = {singleActivityClickFunc}/>
                    </td>)
            }
        }

        trList.push(<tr key = {this._getTrKey()}>{tdList}</tr>)

        return trList;
    }

    _getTrKey() { 
        return this._trKey++;
    }

    _getTdKey() { 
        return this._tdKey++;
    }
}