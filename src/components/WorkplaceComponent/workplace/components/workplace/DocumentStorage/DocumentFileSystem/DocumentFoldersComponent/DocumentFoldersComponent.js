import React, {Component} from "react";

//Styles
import "./DocumentFoldersComponentStyles.css";

import DocumentFoldersGrid from "../DocumentFoldersGrid/DocumentFoldersGrid";
import DocumentFolderComponentModel from "./DocumentFolderComponentModel";

export default class DocumentFoldersComponent extends Component { 

    constructor(props) { 
        super(props);

        this.handleLocalDocsClick = this.handleLocalDocsClick.bind(this);
        this.handleSharedDocsClick = this.handleSharedDocsClick.bind(this);

        this.documentFoldersModel = new DocumentFolderComponentModel(
            this.handleLocalDocsClick,
            this.handleSharedDocsClick
        );

        this.state = { 
            isLoading: false,
            component: this.documentFoldersModel.getComponents()
        }
    }

    handleSharedDocsClick() { 
        this.setState({ 
            component: <DocumentFoldersGrid />
        })
    }

    handleLocalDocsClick() { 
        this.setState({ 
            component: <DocumentFoldersGrid />
        })
    }

    render() { 
        return ( 
            <div className = "documentFolderSpaceContainer">
                {this.state.component}
            </div>
        )
    }
}