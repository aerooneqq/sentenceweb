import React, {Component} from "react";

//Styles
import "./DocumentStorageStyles.css";

//Components
import DocumentStorageOpener from "./DocumentStorageOpener/DocumentStorageOpener";
import DocumentFileSystem from "./DocumentFileSystem/DocumentFileSystem";

export default class DocumentStorage extends Component { 
    
    constructor(props) { 
        super(props);

        this.state = { 
            isOpened: false
        }

        this.changeOpenerOpenedState = this.changeOpenerOpenedState.bind(this);
    }

    changeOpenerOpenedState() { 
        this.setState(prevState => { 
            return { 
                isOpened: !prevState.isOpened
            }
        });
    }

    render() { 
        return ( 
            <div className = "documentStorageOutterContainer">
                <DocumentFileSystem isOpened = {this.state.isOpened}
                                    setDocumentID = {this.props.setDocumentID}/>
                <DocumentStorageOpener changeOpenerOpenedState = {this.changeOpenerOpenedState}
                                       isOpened = {this.state.isOpened} />
            </div>
        )
    }

}