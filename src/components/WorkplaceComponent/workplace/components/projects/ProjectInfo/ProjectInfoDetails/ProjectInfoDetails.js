import React, {Component} from "react";

import "./ProjectInfoDetails.css";
import ProjectInfoDetailsHeader from "./ProjectInfoDetailsHeader/ProjectInfoDetailsHeader";
import Participants from "./Participants/Participants";
import InviteNewParticipant from "./Participants/InviteNewParticipant/InviteNewParticipant";
import DocumentsDetails from "./DocumentsDetails/DocumentsDetails";

export default class ProjectInfoDetails extends Component {
    constructor(props) { 
        super(props);

        this.state = {
            mode: 0,
        }

        this.switchMode = this.switchMode.bind(this);
    }

    switchMode(newMode) {
        this.setState({
            mode: newMode,
        });
    }

    render() {
        return (
            <div className = "project-info-details-outer-container">
                <ProjectInfoDetailsHeader switchProjectDetailsMode = {this.switchMode} />
                {this.state.mode === 0 ? 
                    (
                        <div className = "participants-container">
                            <Participants project = {this.props.project} />
                            <InviteNewParticipant />
                        </div>
                    ) : 
                    (
                        <div className = "documents-container">
                            <DocumentsDetails project = {this.props.project}/>
                        </div>
                    )}
                
            </div>
        )
    }
}