import React, {Component} from "react";

//Styles
import "./DocumentFileSystemHeaderStyles.css"
import WorkplaceSearch from "../../../../search/WorkplaceSearch";
import HeaderBackForwardComponent from "./HeaderBackForwardComponent/HeaderBackForwardComponent";
import Loader from "../../../../../../../loader/Loader";

/**
 * This is the header of the file system component
 * Header constists of two navigation buttons, to walk back or forward to the previously visited folders,
 * the search input which is used to find files or folders and the loader indidcator. 
 */
export default class DocumentFileSystemHeader extends Component { 

    constructor(props) { 
        super(props);

        this.getLoaderClassName = this.getLoaderClassName.bind(this);
    }

    getLoaderClassName() { 
        if (this.props.isUpdating === true){ 
            return "documentHeaderLoader";
        }

        return "documentHeaderLoader fileSystemLoaderCollapsed"
    }

    render() { 
        return ( 
            <div className = "documentFileSystemHeader">
                <HeaderBackForwardComponent />

                <div className = "fileSystemHeaderSearchCont">
                    <WorkplaceSearch backgroundColor = "#f0f0f0" />
                </div>

                <div className = {this.getLoaderClassName()}>
                    <Loader innerWidth = "25px" />
                </div>
            </div>
        )
    }
}