import React, {Component, lazy} from "react";
import DocumentTreeModel from "./Models/DocumentTreeModel";
import {alertAppMessage} from "../../../../../../ApplicationMessage/ApplicationMessageManager";
import Loader from "../../../../../../loader/Loader";
import DocumentTreeItem from "./DocumentTree/DocumentTreeItem/DocumentTreeItem";

export default class DocumentStructureTree extends Component {

    constructor(props) {
        super(props);

        this._getDocumentStructure = this._getDocumentStructure.bind(this);
    }



    _constructTreeFromStructureRecursive(viewModelTreeItem, treeStructure, currID, level) {
        if (treeStructure === null || treeStructure === undefined || treeStructure.length === 0) {
            return;
        }

        for (let el in treeStructure) {
            let innerViewModel = this._getViewModelFromTreeItem(el, currID.id, level);
            viewModelTreeItem.paragraphs.append(innerViewModel);
            currID.id++;
            this._constructTreeFromStructureRecursive(innerViewModel, el.Items, currID, level + 1);
        }
    }

    _getViewModelFromTreeItem(el, id, level) {
        return {
            id: id,
            itemID: el.ID,
            name: el.name,
            level: level,
            opened: false,
            selected: false,
            type: el.itemType === 0 ? "list" : "content",
            paragraphs: [],
        }
    }

    changeCurrentContentParagraph(paragraph) {
        this.props.changeCurrentContentParagraph(paragraph);
    }

    render() {
        return (
            <>
                {this._getDocumentStructure(this.props.documentID).map(paragraph => {
                    return <DocumentTreeItem paragraph = {paragraph}
                                             handleTreeItemClick = {this.changeCurrentContentParagraph}/>
                })}
            </>
        )
    }
}