import React, {Component, lazy} from "react"

//Styles
import "./DocumentDeskStyles.css"

//Components
const DocumentsHeader = lazy(() => import("./DocumentsHeader/DocumentsHeader"));
const DocumentWorkplace = lazy(() => import("./DocumentWorkplace/DocumentWorkplace"));

export default class DocumentDesk extends Component{ 
    constructor(props){ 
        super(props);
    }

    componentDidMount(){ 
    }

    render() { 
        return ( 
            <div id = "documentDeskContainer">
                <DocumentsHeader />
                <DocumentWorkplace />
            </div>
        )
    }

}