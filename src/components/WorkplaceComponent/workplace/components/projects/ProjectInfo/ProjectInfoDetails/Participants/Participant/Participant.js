import React, {Component} from "react";

import "./Participant.css";
import AdminControlElement from "./AdminControlElement/AdminControlElement";

import changeRoleIcon from "./img/change_role.svg";
import removeFromProject from "./img/remove_from_project.svg";
import ParticipantRole from "./ParticipantRole/ParticipantRole";

export default class Participant extends Component {
    constructor(props) { 
        super(props);

        this.state = {
            areRolesVisible: false,
        }

        this.changeRolesState = this.changeRolesState.bind(this);
    }

    _getUserRole(role) {
        switch (role) {
            case 0:
                return "Creator";
            case 1:
                return "Participant";
            case 2:
                return "Observer";
        }
    }

    changeRolesState() {
        this.setState(prevState => {
            return {
                areRolesVisible: !prevState.areRolesVisible, 
            }
        });
    }

    render() {
        return (
            <div className = "participant-container">
                <img className = "participant-photo" src = {"data:image/png;base64," + this.props.user.userPhoto} />
                <div className = "participant-info">
                    <div className = "participant-name">
                        {this.props.user.authorName}
                    </div>
                    <div className = "participant-role">
                        {this._getUserRole(this.props.user.role)}
                    </div>
                    <div className = "participant-admin-control">
                        <AdminControlElement icon = {changeRoleIcon} handleClick = {this.changeRolesState}/>
                        <AdminControlElement icon = {removeFromProject}/>
                    </div>
                    {this.state.areRolesVisible ? (
                        <div className = "participant-roles">
                            <ParticipantRole roleName = "Creator" selected = {this.props.user.role === 0}/>
                            <ParticipantRole roleName = "Participant" selected = {this.props.user.role === 1}/>
                            <ParticipantRole roleName = "Observer" selected = {this.props.user.role === 2}/>
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }
}