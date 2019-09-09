import React, {Component, lazy} from "react"

//Styles
import "./DocumentWorkplaceStyles.css"

//Components
const DocumentStructure = lazy(() => import("./DocumentStructure/DocumentStructure"));
const DocumentContent = lazy(() => import("./DocumentContent/DocumentContent"));
const DocumentStorage = lazy(() => import("../DocumentStorage/DocumentStorage"));


export default class DocumentWorkplace extends Component { 
    
    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div id = "documentWorkplaceComponentOutterCont">
                <DocumentStorage />
                <DocumentStructure />
                <DocumentContent />
            </div>
        )
    }
}