import React, {Component} from "react"
import ReactDOM from "react-dom";
import {scrollY} from "../../../../../../../services/Utility/UtilityFunctions";

//Styles
import "./DocumentContentStyles.css"

//Components
import Paragraph from "./DocumentElements/Paragraph/Paragraph";
import DocumentElementsService from "../../../../../../../services/DocumentElementService/DocumentElementService";
import Loader from "../../../../../../loader/Loader";
import CreateNewElement from "./DocumentElements/CommonComponents/CreateNewElement/CreateNewElement";
import { alertAppMessage } from "../../../../../../ApplicationMessage/ApplicationMessageManager";
import Image from "./DocumentElements/Image/Image";
import NumberedList from "./DocumentElements/NumberedList/NumberedList";
import Table from "./DocumentElements/Table/Table";


export default class DocumentContent extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            documentElements: null,
            isLoading: false,
            currentItemID: null
        }

        this.documentElementsService = new DocumentElementsService(localStorage.getItem("token"));

        this._getDocumentsView = this._getDocumentsView.bind(this);
        this.createNewElement = this.createNewElement.bind(this);
        this.updateDocumentContent = this.updateDocumentContent.bind(this);
        this.deleteDocumentElement = this.deleteDocumentElement.bind(this);
    }
    
    createNewElement(type, index) {
        this.documentElementsService.createNewElement(type, this.state.currentItemID, this.props.documentID, index)
            .then(res => {
                this.setState({
                    documentElements: res.data,
                }, () => {
                    this.forceUpdate();
                    alertAppMessage("Element was added", "success");
                 });
            })
            .catch(er => {
                if (er.response) {
                    alertAppMessage(er.response.data, "error");
                }
                else {
                    alertAppMessage("Error occured while getting your feed", "error");
                }
            });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.parentItemID != prevState.currentItemID) {
            return {
                documentElements: null
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.parentItemID !== this.state.currentItemID
    }

    _getDocumentsView(elements) {
        if (elements) {
            let documentContentItems = [<CreateNewElement index = {-1} createNewElement = {this.createNewElement}/>]
            
            for (let i = 0; i < elements.length; ++i) {
                documentContentItems.push(this._getComponent(elements[i]));
                documentContentItems.push(<CreateNewElement index = {i} createNewElement = {this.createNewElement}/>);
            }

            return documentContentItems;
        }

        return null;
    }

    _getInitialDocumentsView() {
        this.updateDocumentContent();
    }

    _getComponent(documentElement) {
        switch (documentElement.type) {
            case "Paragraph":
                return <Paragraph element = {documentElement} createNewElement = {this.createNewElement}
                                  deleteElement = {this.deleteDocumentElement}/>
            case "Image":
                return <Image element = {documentElement} createNewElement = {this.createNewElement}
                              deleteElement = {this.deleteDocumentElement}/>

            case "NumberedList":
                return <NumberedList element = {documentElement} createNewElement = {this.createNewElement}
                                     deleteElement = {this.deleteDocumentElement}/>

            case "Table":
                return <Table element = {documentElement} createNewElement = {this.createNewElement}
                              deleteElement = {this.deleteDocumentElement}/>

            default:
                return null
        }
    }

    updateDocumentContent() {
        this.documentElementsService.getDocumentElements(this.props.documentID, this.props.parentItemID)
            .then(res => {
                this.setState({
                    documentElements: res.data,
                    currentItemID: this.props.parentItemID,
                }, () => {
                    this.forceUpdate();
                })
            })
            .catch(err => {
                if (err.response) {
                    alertAppMessage(err.response.data, "error");
                }
                else {
                    alertAppMessage("Error occurred while updating element", "error");
                }
            });
    }

    deleteDocumentElement(elementID) {
        this.documentElementsService.deleteDocumentElement(elementID)
            .then(res => {
                this.updateDocumentContent();
                alertAppMessage("The element was deleted", "success")
            })
            .catch(err => {
                if (err.response) {
                    alertAppMessage(err.response.data, "error");
                }
                else {
                    alertAppMessage("Error occurred while deleting element", "error");
                }
            });
    }

    render() { 
        return ( 
            <div id = "documentScrollCont">
                <div id = "documentContentOutterContainer">
                    <div id = "documentContentInnerContainer">
                        {this.state.documentElements ? this._getDocumentsView(this.state.documentElements) :
                             (this.props.parentItemID ? this._getInitialDocumentsView() : null)}
                    </div>
                </div>
            </div>
        )
    }
}