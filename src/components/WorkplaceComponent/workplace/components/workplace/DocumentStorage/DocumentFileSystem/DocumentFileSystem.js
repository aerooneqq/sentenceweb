import React, {Component} from "react";

import "./DocumentFileSystemStyles.css";

//Components
import DocumentFileSystemHeader from "./DocmentFileSystemHeader/DocumentFileSystemHeader";
import DocumentFoldersComponent from "./DocumentFoldersComponent/DocumentFoldersComponent";

export default class DocumentFileSystem extends Component { 

    constructor(props) { 
        super(props);

        this.getClassName = this.getClassName.bind(this);
    }

    render() { 
        return ( 
            <div id = "documentStorageContainer" className = {this.getClassName()}>
                <DocumentFileSystemHeader />
                <DocumentFoldersComponent />
            </div>
        );
    }

    getClassName() { 
        return this.props.isOpened === true ? `documentFileSystemOutterCont documentFileSystemSlideRight`
            : `documentFileSystemOutterCont documentFileSystemSlideLeft`
    }
}