import React, {Component} from "react";

import "./TemplateStructureTreeContainer.css";
import TreeItem from "./TreeItem/TreeItem";
import { deepCopy } from "../../../../../../../services/Utility/UtilityFunctions";

export default class TemplateStructureTreeContainer extends Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <div className = "template-info-structure-tree-container">
                {this.props.items ? this.props.items.map(item => <TreeItem item = {item}
                                                                           updateStructure = {this.props.updateStructure}
                                                                           parentItem = {null} />) : null}
            </div>
        )
    }
}