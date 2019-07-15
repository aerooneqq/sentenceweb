import React,{Component, lazy} from "react"
import "./styles/MonthActivityComponentStyles.css"

const SingleUserActivityComponent = lazy(() => import("./SingleUserActivityComp")) 

export default class MonthActivityComponent extends Component{ 
    days = ["Mn", "Tu", "Wd", "Th", "Fr", "St", "Sn"]

    constructor(props){ 
        super(props)

        this.state = { 
            daysCount: this.props.daysCount,
            activities: this.props.activities,
            monthName: this.props.monthName
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

        
        for (let i = 0; i < daysCount / 7 + 1; i++){
            tdList = []
            for (let j = 0; i*7 + j < daysCount && j < 7; j++){ 
                tdList.push(
                    <td>
                        <SingleUserActivityComponent count = {this.state.activities[i*7 + j].count}/>
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