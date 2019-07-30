import React, {Component} from "react";

//Styles
import  "./ProfileDataHeaderStyles.css";

export default class ProfileDataHeader extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){   
        return(
            <div id = "profileDataHeader">
                {this.props.dataName}
            </div>
        );
    }
}