import React, {Component} from "react";

import "./Participants.css";
import Participant from "./Participant/Participant";
import ProjectService from "../../../../../../../../services/Projects/ProjectService";
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";

export default class Participants extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }

        this.projectService = new ProjectService(localStorage.getItem("token"));
        this.responseService = new ResponseService();
    }

    componentDidMount() {
        this.projectService.getProjectUsers(this.props.project.id)
            .then(res => {
                this.setState({
                    users: res.data,
                });
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while getting project users")
            })
    }

    render() {
        return (
            <div className = "participants-container">
                {this.state.users.map(user => <Participant user = {user} />)}
            </div>
        )
    }
}