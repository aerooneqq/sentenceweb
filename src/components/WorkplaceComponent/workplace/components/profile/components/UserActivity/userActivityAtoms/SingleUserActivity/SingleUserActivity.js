import React, {Component} from "react"

import "./SingleUserActivityStyles.css"

/**
 * PROPS LIST:
 * 1) activityData - the object which describes the activity
 * 2) handleSingleUserActivityClick
 */
export default class SingleUserActivity extends Component{ 
    constructor(props) { 
        super(props)

        this.state = { 
            count: props.activityData.count
        }

        this.maxCount = 15;

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
        let size = this.state.count > this.maxCount ? this.maxCount : this.state.count;
        
        return { 
            "width": size + 1,
            "height": size + 1,
            "border-radius": size
        }
    }
}