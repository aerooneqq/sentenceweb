import React, {Component} from "react"

//Styles
import "./ProfileHeaderStyles.css"

export default class ProfileHeader extends Component { 

    constructor(props){ 
        super(props)
    }

    render() { 
        return ( 
            <div id="profileHeader">
                {this.props.header}
            </div>
        )
    }
}