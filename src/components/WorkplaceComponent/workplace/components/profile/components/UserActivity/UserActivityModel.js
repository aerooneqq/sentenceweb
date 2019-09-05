import React from "react"
import MonthActivityComponent from "./userActivityAtoms/MonthActivity/MonthActivity";
import DateService from "../../../../../../../services/Dates/DateService";

export default class UserActivityModel { 
    months = [
        {name: "January", daysCount: 31, firstDayNum: 1}, 
        {name : "February", daysCount: 28, firstDayNum: 4}, 
        {name : "March", daysCount: 31, firstDayNum: 4}, 
        {name: "April", daysCount: 30, firstDayNum: 0}, 
        {name : "May", daysCount: 31, firstDayNum: 2}, 
        {name : "June", daysCount: 30, firstDayNum: 5}, 
        {name : "July", daysCount: 31, firstDayNum: 0},
        {name : "August", daysCount: 31, firstDayNum: 3}, 
        {name :"September", daysCount: 30, firstDayNum: 6}, 
        {name : "October", daysCount: 31, firstDayNum: 1}, 
        {name : "November", daysCount: 30, firstDayNum: 4},
        {name : "December", daysCount: 31, firstDayNum: 6}
    ];

    constructor(activities) { 
        this._activities = activities;
    }

    getActitivtyComponents() { 
        let data = this._activities;

        let monthsActivities = this._createEmptyCalendar();

        for (let activity of data.activities) { 
            let dateService = new DateService(activity.activityDate);
            
            let monthIndex = dateService.getMonth() - 1;
            let dayIndex = dateService.getDay() - 1;

            monthsActivities[monthIndex][dayIndex].count += 1;
            monthsActivities[monthIndex][dayIndex].activities.push(activity);
        }

        let monthActivitiesComponents = [];

        for (let index in this.months) { 
            monthActivitiesComponents.push(
                <MonthActivityComponent daysCount = {this.months[index].daysCount}
                                        activitiesData = {monthsActivities[index]}
                                        month = {this.months[index]} />
                )
        }

        return monthActivitiesComponents;
    }

    _createEmptyCalendar() { 
        let monthActivities = []

        for (let i = 0; i < 12; i++) { 
            monthActivities.push({});

            for (let j = 0; j < this.months[i].daysCount; j++) {
                monthActivities[i][j] = {count: 0, activities: []};
            }
        }

        return monthActivities;
    }

}