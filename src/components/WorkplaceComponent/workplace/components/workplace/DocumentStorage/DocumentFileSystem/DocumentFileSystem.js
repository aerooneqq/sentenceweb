import React, {Component} from "react";

import "./DocumentFileSystemStyles.css";

//Components
import DocumentFileSystemHeader from "./DocmentFileSystemHeader/DocumentFileSystemHeader";
import DocumentFoldersComponent from "./DocumentFoldersComponent/DocumentFoldersComponent";

/**
 * Document file system constistf of several parts:
 * 1) Header:
 *    In the header component there are back and forward buttons, which allows to navigate throw the
 *    folders' history, the search input, which allows to search for a specific folder or file, and loader
 *    indicator.
 * 
 * 2) File system:
 *    The file system is the main part of the document file system.
 */
export default class DocumentFileSystem extends Component { 

    constructor(props) { 
        super(props);

        this.getClassName = this.getClassName.bind(this);
        this.changeUpdatingState = this.changeUpdatingState.bind(this);

        this.state = { 
            isUpdating: false
        };
    }

    changeUpdatingState(isUpdating) { 
        this.setState({
            isUpdating: isUpdating
        });
    } 
    
    render() { 
        return ( 
            <div id = "documentStorageContainer" className = {this.getClassName()}>
                <DocumentFileSystemHeader isUpdating = {this.state.isUpdating} />
                <DocumentFoldersComponent changeUpdatingState = {this.changeUpdatingState}
                                          setDocumentID = {this.props.setDocumentID}
                                          getDocumentStructure = {this.props.getDocumentStructure}/>
            </div>
        );
    }

    getClassName() { 
        return this.props.isOpened === true ? `documentFileSystemOutterCont documentFileSystemSlideRight`
            : `documentFileSystemOutterCont documentFileSystemSlideLeft`
    }
}