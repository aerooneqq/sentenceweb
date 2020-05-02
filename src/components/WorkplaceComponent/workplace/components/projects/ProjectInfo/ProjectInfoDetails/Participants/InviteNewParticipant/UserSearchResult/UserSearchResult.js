import React, {Component} from "react";

import "./UserSearchResult.css";

import inviteUserIcon from "./img/invite_user.svg";

import UserPhotoService from "../../../../../../../../../../services/UserPhotoService/UserPhotoService";
import ResponseService from "../../../../../../../../../../services/ResponseService/ReponseService";


export default class UserSearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userPhoto: null
        }

        this.userPhotoService = new UserPhotoService(localStorage.getItem("token"));
        this.responseService = new ResponseService();
    }

    componentDidMount() {
        this.userPhotoService.getOtherUserPhoto(this.props.user.userID)
            .then(res => {
                this.setState({
                    userPhoto: res.data,
                })
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while getting user photo");
            })
    }

    render() {
        return (
            <div className = "user-search-result-container">
                <img className = "user-search-result-photo" src = {"data:image/png;base64," + this.state.userPhoto} />
                <div className = "user-search-result-text-info">
                    <div className = "user-search-result-name">
                        {this.props.user.name}
                    </div>
                    <div className = "user-search-result-birth-date">
                        {this.props.user.birthDate.substr(0, 10)}
                    </div>
                </div>
                <div className = "user-search-result-invite-container">
                    <img className = "user-search-result-invite-icon" src = {inviteUserIcon} />
                </div>
            </div>
        )
    }
}