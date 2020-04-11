import React, {Component, lazy} from "react";
import DocumentTreeItem from "./DocumentTree/DocumentTreeItem/DocumentTreeItem";
import {alertAppMessage} from "../../../../../../ApplicationMessage/ApplicationMessageManager";
import DocumentStructureService from "../../../../../../../services/DocumentStructureService/DocumentStructureService";
import Loader from "../../../../../../loader/Loader";
import DocumentTreeComponent from "./DocumentTree/DocumentTreeComponent";

export default class DocumentStructureTree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            documentID: props.documentID
        };

        this.documentTree = null;

        this._constructTreeFromStructureRecursive = this._constructTreeFromStructureRecursive.bind(this);
        this._getViewModelFromTreeItem = this._getViewModelFromTreeItem.bind(this);
        this.changeCurrentContentParagraph = this.changeCurrentContentParagraph.bind(this);
    }

    _getDocumentTreeViewModel(data) {
        this.documentTree = this._getViewModelFromTreeItem(data, 0, 0);

        this._constructTreeFromStructureRecursive(this.documentTree, data.items, { id: 1 }, 1);

        console.log(this.documentTree);
        return this.documentTree;
    }

    _constructTreeFromStructureRecursive(viewModelTreeItem, treeStructure, currID, level) {
        if (treeStructure === null || treeStructure === undefined || treeStructure.length === 0) {
            return;
        }

        for (let el of treeStructure) {
            let innerViewModel = this._getViewModelFromTreeItem(el, currID.id, level);
            currID.id++;
            this._constructTreeFromStructureRecursive(innerViewModel, el.items, currID, level + 1);
            viewModelTreeItem.items.push(innerViewModel);
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
            type: el.itemStatus.itemType === 0 ? "list" : "content",
            items: [],
        }
    }

    changeCurrentContentParagraph(paragraph) {
        this.props.changeCurrentContentParagraph(paragraph);
    }

    render() {
        return (
            this.props.data
                ? <DocumentTreeComponent item = {this._getDocumentTreeViewModel(this.props.data.items[0])}
                                         changeCurrentContentParagraph = {this.props.changeCurrentContentParagraph}
                                         documentID = {this.props.documentID}
                                         addListItem = {this.props.addListItem}
                                         addContentItem = {this.props.addContentItem}
                                         renameItem = {this.props.renameItem}
                                         deleteItem = {this.props.deleteItem}
                                         getDocumentContent = {this.props.getDocumentContent}/>
                : null
        )
    }
}