import React, {Component} from "react";

import "./DocumentsDetails.css";
import CreateNewDocument from "./CreateNewDocument/CreateNewDocument";
import Document from "./Document/Document";
import ProjectService from "../../../../../../../../services/Projects/ProjectService";
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";

export default class DocumentsDetails extends Component {
    constructor(props) { 
        super(props);

        this.state = {
            documents: [],
        };

        this.projectService = new ProjectService(localStorage.getItem("token"));
        this.responseService = new ResponseService();
    }

    componentDidMount() {
        this.projectService.getProjectDocuments(this.props.project.id)
            .then(res => {
                this.setState({
                    documents: res.data,
                });
            })
            .catch(err => {
                this.responseService.alertErrorMessage(err, "Error ocurred while getting documents");
            });
    }

    render() {
        return (
            <div className = "documents-details-outer-container">
                <div className = "documents-details-list">
                    {this.state.documents.map(document => <Document document = {document}/>)}
                </div>
                <div className = "create-new-document">
                    <CreateNewDocument project = {this.props.project} />
                </div>
            </div>
        )
    }
}