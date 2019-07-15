import React, {Component} from "react"

import "./styles/SingleUserActivityStyles.css"

export default class SingleUserActivityComp extends Component{ 
    constructor(props){ 
        super(props)

        this.state = { 
            count: this.props.count
        }

        this.getCountStyle = this.getCountStyle.bind(this)
    }

    render(){ 
        return(
            <div className = "singleUserActivityCont">
                <div style = {this.getCountStyle()} className = "activityBall" />
                <span class = "userActivityToolTip">
                    {this.state.count}
                </span> 
            </div>
        )
    }

    getCountStyle(){ 
        return{ 
            "width": this.state.count + 1,
            "height": this.state.count + 1,
            "border-radius": this.state.count,
        }
    }
}