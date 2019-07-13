import React, {Component} from "react"
import "./styles/ActivityHeaderStyles.css"

export default class ActivityHeader extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        return( 
            <div id = "activityHeader">Activity</div>
        )
    }
}