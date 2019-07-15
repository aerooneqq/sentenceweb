import React, {Component} from "react"
import "./styles/UserFeedHeaderStyles.css"

export default class UserFeedHeader extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        return(
            <div id = "userFeedHeaderCont">
                Feed
            </div>
        )
    }
}