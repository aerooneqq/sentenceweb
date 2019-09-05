import React, {Component} from "react"

import "./SingleUserActivityStyles.css"

export default class SingleUserActivity extends Component{ 
    constructor(props) { 
        super(props)

        this.state = { 
            count: props.activityData.count
        }

        this.getCountStyle = this.getCountStyle.bind(this)
        this.handleSingleActivityClick = this.handleSingleActivityClick.bind(this);
    }

    handleSingleActivityClick() { 
        this.props.handleSingleUserActivityClick(this.props.activityData);
    }

    render() { 
        return (
            <div className = "singleUserActivityCont" onClick = {this.handleSingleActivityClick}>
                <div style = {this.getCountStyle()} className = "activityBall" />
                <span class = "userActivityToolTip">
                    {this.state.count}
                </span> 
            </div>
        )
    }

    getCountStyle() { 
        return{ 
            "width": this.state.count + 1,
            "height": this.state.count + 1,
            "border-radius": this.state.count,
        }
    }
}