import React, {Component} from "react";

import "./ParticipantRole.css";

export default class ParticipantRole extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = {this.props.selected === true ? "participant-role-selected" : "participant-role-container"}>
                {this.props.roleName}
            </div>
        )
    }
}