import React, {Component} from "react"

//Styles
import "./UserAtomFeed.css"
import DateService from "../../../../../../../../services/Dates/DateService";
import UserFeedPhoto from "../UserFeedPhoto/UserFeedPhoto";

export default class UserAtomFeed extends Component { 
    constructor(props) { 
        super(props)

        let dateService = new DateService(props.date);

        let day = dateService.getDay();
        let month = dateService.getMonth();
        let year = dateService.getYear();

        this.state = { 
            message: props.message,
            date: day + "." + month + "." + year
        };
    }

    render() { 
        return( 
            <div className="userAtomFeedCont">
                <div className="userAtomFeedPhoto">
                    <UserFeedPhoto photo = {this.props.photo}/>
                </div>

                <div className="userFeedTextCont">
                    <div className = "userAtomFeedData">
                        <div className = "userAtomFeedAuthorName">
                            {this.props.authorName}
                        </div>
                        <div className = "userAtomFeedDate">
                            {this.state.date}
                        </div>
                    </div>
                    <div className="userAtomFeedText">
                        {this.state.message}
                    </div>
                </div>
            </div>
        )
    }
}