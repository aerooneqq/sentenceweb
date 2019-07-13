import React, {Component, lazy} from "react"
import "./styles/UserActivityComponentStyles.css"

const MonthActivityComponent = lazy(() => import("./MonthActivityComponent")) 


export default class UserActivityComponent extends Component{
    months = ["January", "February", "March", "April", "May", "June", "August", "September", "October", "November",
        "December"]
    
    constructor(props){ 
        super(props)

        this.state = { 
            yearActivities: {}
        }

        for (let month in this.months){ 
            this.state.yearActivities[month] = []
        }

        let min = 10;
        let max = 26;

        for (let month in this.months){ 
            for (let i = 0; i<31; i++){ 
                this.state.yearActivities[month].push({count: (Math.floor(Math.random() * (max - min + 1)) + min)/2 })
            }
        }
    }

    render(){ 
        let monthActivities = []

        for (var key in this.months){ 
            monthActivities.push(
                <div className = "monthActivityCont">
                    <MonthActivityComponent daysCount = {this.state.yearActivities[key].length}
                    activities = {this.state.yearActivities[key]} monthName = {this.months[key]}/>
                </div>
            )
        }

        return(
            <div>
                <div id = "userActivitiesCont">
                    {monthActivities}
                </div>
            </div>
        )
    }
}