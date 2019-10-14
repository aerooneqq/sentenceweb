import React, {Component} from "react";

//Styles
import  "./ProfileDataHeaderStyles.css";

/**
 * PROPS LIST:
 * 1) dataName - the name of the currently opened data.
 */
export default class ProfileDataHeader extends Component { 
    render(){   
        return(
            <div id = "profileDataHeader">
                {this.props.dataName}
            </div>
        );
    }
}