import React, {Component} from "react";

//Styles
import "./DocumentMainFolderStyles.css";

/**
 * There are two document main folders: the shared docs, and local docs.
 * Shared docs are the docs from the projects, or documents which can be ssen by other users/
 * Local docs can be seen only by the user.
 */
export default class DocumentMainFolder extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div className = "mainFolderOutterCont" onClick = {this.props.onClick}>
                <div className = "mainFolderBorder">
                    <div className = "mainFolderContent">
                        <object type="image/svg+xml"
                                data = {this.props.icon}
                                className = "mainFolderIcon">
                            Folder     
                        </object>
                        <span className = "mainFolderName">
                            {this.props.name}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}