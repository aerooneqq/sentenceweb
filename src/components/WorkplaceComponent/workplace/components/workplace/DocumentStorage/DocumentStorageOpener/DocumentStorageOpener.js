import React, {Component} from "react";

//Styles
import "./DocumentStorageOpenerStyles.css";

//Icons
import openDocumentStorageIcon from "./img/open_document_storage_icon.svg";

export default class DocumentStorageOpener extends Component { 
    
    constructor(props) { 
        super(props);

        this.state = { 
            isHovered: false
        };

        this.onOpenerMouseEnter = this.onOpenerMouseEnter.bind(this);
        this.onOpenerMouseLeave = this.onOpenerMouseLeave.bind(this);
        this.handleOpenerClick = this.handleOpenerClick.bind(this);
        this.getOpenerIconClass = this.getOpenerIconClass.bind(this);
    }

    onOpenerMouseEnter() { 
        this.setState({ 
            isHovered: true
        });
    }

    onOpenerMouseLeave() { 
        this.setState({ 
            isHovered: false
        });
    }

    handleOpenerClick() { 
        this.props.changeOpenerOpenedState();
    }

    getOpenerIconClass() { 
        return this.props.isOpened ? "documentOpenerOpenIcon iconLeftRotation" :
             "documentOpenerOpenIcon iconRightRotation"; 
    }

    render() { 
        return (
            <div className = "documentOpenerContaier"
                 onMouseEnter = {this.onOpenerMouseEnter}
                 onMouseLeave = {this.onOpenerMouseLeave}
                 onClick = {this.handleOpenerClick}>
                <img className = {this.getOpenerIconClass()}
                     src = {openDocumentStorageIcon} 
                     alt = "Open" />
            </div>
        )
    }
}