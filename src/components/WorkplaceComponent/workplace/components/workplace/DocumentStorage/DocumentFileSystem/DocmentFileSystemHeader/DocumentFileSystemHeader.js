import React, {Component} from "react";

//Styles
import "./DocumentFileSystemHeaderStyles.css"
import WorkplaceSearch from "../../../../search/WorkplaceSearch";

export default class DocumentFileSystemHeader extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div className = "documentFileSystemHeader">
                <WorkplaceSearch backgroundColor = "#f0f0f0" />
            </div>
        )
    }
}