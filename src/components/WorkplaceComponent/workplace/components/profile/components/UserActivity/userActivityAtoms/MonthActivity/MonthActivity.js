import React,{Component, lazy} from "react"

import "./MonthActivityStyles.css"

const SingleUserActivity = lazy(() => import("../SingleUserActivity/SingleUserActivity")) 

export default class MonthActivity extends Component{ 
    days = ["Mn", "Tu", "Wd", "Th", "Fr", "St", "Sn"]

    constructor(props){ 
        super(props)

        this.state = { 
            daysCount: this.props.month.daysCount,
            activities: this.props.activities,
            monthName: this.props.month.name,
            firstDayNum: this.props.month.firstDayNum
        }
    }

    render(){ 
        const trList = [];
        
        let daysCount = this.state.daysCount;

        let tdList = [];
        for (let i = 0; i < this.days.length; i++){ 
            tdList.push(<td>{this.days[i]}</td>)
        }
        trList.push(<tr className="dayName">{tdList}</tr>)

        tdList = []
        let j = 0;

        for (j = 0; j<this.state.firstDayNum; j++){ 
            tdList.push(
                <td></td>
            )
        }

        for (j = this.state.firstDayNum; j<7; j++){ 
            tdList.push(
                <td>
                    <SingleUserActivity count = {this.state.activities[j - this.state.firstDayNum].count}/>
                </td>
            )
        }
        
        trList.push(<tr>{tdList}</tr>);
        
        for (let i = 1; i < (daysCount + this.state.firstDayNum) / 7 + 1; i++){
            tdList = []
            for (j = 0; i*7 + j < daysCount && j < 7; j++){ 
                tdList.push(
                    <td>
                        <SingleUserActivity count = {this.state.activities[i*7 + j].count}/>
                    </td>
                )
            } 

            trList.push(<tr>{tdList}</tr>);
        }
        
        return(
            <div className = "monthActivityCont">
                <div className = "monthNameCont">{this.state.monthName}</div>
                <table>
                    {trList}
                </table>
            </div>

        )
    }
}