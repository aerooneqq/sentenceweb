import React, {Component, lazy} from "react"

//Styles
import "./DocumentWorkplaceStyles.css"

//Components
const DocumentStructure = lazy(() => import("./DocumentStructure/DocumentStructure"));
const DocumentContent = lazy(() => import("./DocumentContent/DocumentContent"));

export default class DocumentWorkplace extends Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div id = "documentWorkplaceComponentOutterCont">
                <DocumentStructure />
                <DocumentContent />
            </div>
        )
    }
}