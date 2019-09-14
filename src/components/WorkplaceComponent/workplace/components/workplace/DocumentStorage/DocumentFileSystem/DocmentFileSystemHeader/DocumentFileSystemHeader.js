import React, {Component} from "react";

//Styles
import "./DocumentFileSystemHeaderStyles.css"
import WorkplaceSearch from "../../../../search/WorkplaceSearch";
import HeaderBackForwardComponent from "./HeaderBackForwardComponent/HeaderBackForwardComponent";

export default class DocumentFileSystemHeader extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div className = "documentFileSystemHeader">
                <HeaderBackForwardComponent />
                <div className = "fileSystemHeaderSearchCont">
                    <WorkplaceSearch backgroundColor = "#f0f0f0" />
                </div>
            </div>
        )
    }
}