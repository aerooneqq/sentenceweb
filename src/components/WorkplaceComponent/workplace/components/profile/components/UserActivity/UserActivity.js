import React, {Component, lazy, Suspense} from "react";
import axios from "axios";

//Styles
import "./UserActivityStyles.css";

//Services
import UserActivitiesService from "../../../../../../../services/UserServices/UserActivitiesService";
import DateService from "../../../../../../../services/Dates/DateService";

//App messages
import {alertAppMessage} from "../../../../../../ApplicationMessage/ApplicationMessageManager";

//Components
const MonthActivityComponent = lazy(() => import("./userActivityAtoms/MonthActivity/MonthActivity"));
const Loader = lazy(()=>import("../../../../../../loader/Loader"));
const ProfileHeader = lazy(() => import(("../ProfileHeader/ProfileHeader")));

export default class UserActivity extends Component{
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
        {name : "December", daysCount: 31, firstDayNum: 6}];
    
    constructor(props){ 
        super(props)

        this.state = { 
            components: <Loader message = "Loading activities..." />,
            width: 500
        };
    }

    componentDidMount(){ 
        this.setState({ 
            components: <Loader message = "Loading activities" />
        })

        let userActivitiesService = new UserActivitiesService();
        userActivitiesService.getUserActivities(localStorage.getItem("token"))
            .then(res => 
            { 
                let data = res.data;
                let monthActivities = data.activities.map(activity => activity.activityDate);
                
                let yearActivities = {}

                for (let i = 0; i<12; i++){ 
                    yearActivities[i] = {}
                }

                for (let index in monthActivities) { 
                    let dateService = new DateService(monthActivities[index]);

                    let day = dateService.getDay() - 1;
                    let month = dateService.getMonth() - 1;

                    if (yearActivities[month][day] === undefined){
                        yearActivities[month][day] = 1;
                    }
                    else { 
                        yearActivities[month][day] += 1;
                    }
                }

                let yearActivitiesComponentList = []
                for (let month in this.months){ 
                    yearActivitiesComponentList[month] = [];
                }

                let monthIndex = 0;
                for (let month in this.months){ 
                    for (let i = 0; i<31; i++){ 
                        yearActivitiesComponentList[month].push(
                            {count: yearActivities[monthIndex][i] === undefined ? 
                            0 : yearActivities[monthIndex][i]})
                    }
                    monthIndex+=1;
                }

                monthActivities = []

                for (var key in this.months){ 
                    monthActivities.push(
                        <div className = "monthActivityCont">
                            <MonthActivityComponent daysCount = {yearActivitiesComponentList[key].length}
                            activities = {yearActivitiesComponentList[key]} month = {this.months[key]}/>
                        </div>
                    )
                }

                this.setState({ 
                    components: monthActivities,
                    width: document.getElementById("userActivityOutterContainer").offsetWidth - 100
                });
            }).catch(er => { 
                alertAppMessage("Error occured while getting your activities", "error");
            });
    }

    render(){ 
        return(
            <div id = "userActivityOutterContainer">
                <div id = "userActivitiesCont" 
                     className = "profileShadowContainer">
                    <Suspense fallback = {<Loader message = "Loading activities..." />}>
                        {this.state.components}
                    </Suspense>
                </div>
            </div>
        )
    }
}