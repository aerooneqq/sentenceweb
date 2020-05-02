import React, {Component} from "react";

import "./InviteNewParticipant.css";
import inviteNewParticipant from "./img/invite_new_participant.svg"
import WorkplaceSearch from "../../../../../search/WorkplaceSearch";
import UserService from "../../../../../../../../../services/UserServices/UserService";
import ResponseService from "../../../../../../../../../services/ResponseService/ReponseService";
import UserSearchResult from "./UserSearchResult/UserSearchResult";


export default class InviteNewParticipant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchVisible: false,
            userSearchResult: [],
        }

        this.userService = new UserService(localStorage.getItem("token"));
        this.responseService = new ResponseService();

        this.handleUserSearch = this.handleUserSearch.bind(this);
        this.changeMode = this.changeMode.bind(this);
    }

    handleUserSearch(query) {
        this.userService.searchForUsers(query)
            .then(res => {
                this.setState({
                    userSearchResult: res.data
                });
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while searching for users");
            })
    }

    changeMode() {
        this.setState(prevState => {
            return {
                searchVisible: !prevState.searchVisible
            };
        });
    }

    render() {
        return (
            <div className = "invite-new-participant-container">
                {this.state.searchVisible === true ? (
                    <div className = "invite-new-participant-search">
                        <WorkplaceSearch search =  {this.handleUserSearch}
                                         marginTop = {10}/>
                        <div className = "invite-new-participant-search-result">
                            {this.state.userSearchResult.map(user => <UserSearchResult user = {user} />)}
                        </div>
                    </div>
                ) : <img className = "invite-new-participant-icon" src = {inviteNewParticipant}  onClick = {this.changeMode}/>}
            </div>
        )
    }
}