import React, {Component} from "react";

//Styles
import "./DocumentFoldersGridStyles.css";

import DocumentFile from "../DocumentFile/DocumentFile";
import DocumentFolder from "../DocumentFolder/DocumentFolder";

export default class DoumentFoldersGrid extends Component { 

    constructor(props) { 
        super(props);
    }

    componentDidMount() { 

    }

    render() { 
        return ( 
            <div className = "documentFoldersOutterContainer">
                <div className = "documentFolderGrid">
                </div>
            </div>
        )
    }

}