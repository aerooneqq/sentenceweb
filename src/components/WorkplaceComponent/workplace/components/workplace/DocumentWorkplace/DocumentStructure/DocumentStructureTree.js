import React, {Component, lazy} from "react";
import DocumentTreeItem from "./DocumentTree/DocumentTreeItem/DocumentTreeItem";
import {alertAppMessage} from "../../../../../../ApplicationMessage/ApplicationMessageManager";
import DocumentStructureService from "../../../../../../../services/DocumentStructureService/DocumentStructureService";
import Loader from "../../../../../../loader/Loader";

export default class DocumentStructureTree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            documentTree: null,
            documentID: props.documentID
        };

        this.documentStructureService = new DocumentStructureService(localStorage.getItem("token"));

        this._getDocumentStructure = this._getDocumentStructure.bind(this);
        this._constructTreeFromStructureRecursive = this._constructTreeFromStructureRecursive.bind(this);
        this._getViewModelFromTreeItem = this._getViewModelFromTreeItem.bind(this);
        this.changeCurrentContentParagraph = this.changeCurrentContentParagraph.bind(this);
    }

    componentDidMount() {
        this._getDocumentStructure();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.documentID !== null && nextProps.documentID !== undefined
            && nextProps.documentID !== prevState.documentID) {
            alert(nextProps);
            return {
                documentTree: null,
                documentID: nextProps.documentID
            }
        }
    }

    _getDocumentStructure() {
        if (this.state.documentID !== null && this.state.documentID !== undefined) {
            let response = this.documentStructureService.getDocumentStructure(this.state.documentID)
                .then(res => {
                    let documentTree = { paragraphs: [] };
                    this._constructTreeFromStructureRecursive(documentTree, res.data.items, {id: 0}, 0);

                    this.setState({
                        documentTree: documentTree
                    });
                })
                .catch(er => {
                    if (er.response) {
                        alertAppMessage(response.data, "error");
                    }
                    else {
                        alertAppMessage("Error occured while getting your feed", "error");
                    }

                    this.setState({
                        documentTree: []
                    });
                });
        }

        this.setState({
            documentTree: []
        });
    }

    _constructTreeFromStructureRecursive(viewModelTreeItem, treeStructure, currID, level) {
        if (treeStructure === null || treeStructure === undefined || treeStructure.length === 0) {
            return;
        }

        for (let el in treeStructure) {
            let innerViewModel = this._getViewModelFromTreeItem(el, currID.id, level);
            viewModelTreeItem.paragraphs.append(innerViewModel);
            currID.id++;
            this._constructTreeFromStructureRecursive(innerViewModel, el.items, currID, level + 1);
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
            this.props.documentID === null ? null :
            this.state.documentTree === null ?
                <Loader message = "Loading structure..." /> :
                this.state.documentTree.map(paragraph =>
                    <DocumentTreeItem paragraph = {paragraph}
                                      handleTreeItemClick = {this.changeCurrentContentParagraph}/>)
        )
    }
}