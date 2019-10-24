import React, {Component} from "react"

//Styles
import "./ProfileHeaderStyles.css"

/**
 * PROPS LIST:
 * 1) header - the name of the header to be displayed
 */
export default class ProfileHeader extends Component { 
    render() { 
        return ( 
            <div id="profileHeader">
                {this.props.header}
            </div>
        )
    }
}