import React, {Component} from "react"

//Styles
import "./UserActivityDataStyles.css"

//Icons
import closeIconStatic from "./img/close_user_activity_data_icon.png";
import closeIconActive from "./img/close_user_activity_data_icon_active.png"

export default class UserActivityData extends Component  { 

    constructor(props) { 
        super(props);

        this.state = { 
            isCloseIconActive: false
        };

        this.onCloseIconMouseEnter = this.onCloseIconMouseEnter.bind(this);
        this.onCloseIconMouseLeave = this.onCloseIconMouseLeave.bind(this);
    }

    onCloseIconMouseEnter() { 
        this.setState({ 
            isCloseIconActive: true
        });
    }

    onCloseIconMouseLeave() { 
        this.setState({ 
            isCloseIconActive: false
        });
    }
    
    render() { 
        return ( 
            <div className = "userActivityData">
                <div className = "userActivityDataHeaderCont">
                    <div className = "userActivityDataHeaderText">
                        Activity data
                    </div>
                    <div className = "userActivityDataFill" />
                    <div className = "userActivityDataHeaderIcon">
                        <img src = {this.state.isCloseIconActive === true ? closeIconActive : closeIconStatic } 
                             alt = "Close"
                             className = "closeUserActivityIcon"
                             onMouseEnter = {this.onCloseIconMouseEnter}
                             onMouseLeave = {this.onCloseIconMouseLeave}
                             onClick = {this.props.closeActivityData} />
                    </div>
                </div>
            </div>
        )
    }
}