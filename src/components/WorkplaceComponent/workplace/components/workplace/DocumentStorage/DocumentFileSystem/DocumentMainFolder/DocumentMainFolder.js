import React, {Component} from "react";

//Styles
import "./DocumentMainFolderStyles.css";

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