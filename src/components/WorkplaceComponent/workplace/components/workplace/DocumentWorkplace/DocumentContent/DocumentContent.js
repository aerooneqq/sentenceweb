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

let outterScrollStyle = { 
    width: "10px",
    height: "100%",
    background: "#AAAAAA",
    "border-radius": "5px"
}

let thumbStyle = { 
    width: "10px",
    "border-radius": "5px",
    "background": "#909090"
}

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
        this.props.createNewElement(type, index);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.parentItemID !== this.state.currentItemID
    }

    _getDocumentsView() {
        this.updateDocumentContent();
        if (this.state.documentElements) {
            let documentContentItems = [<CreateNewElement index = {-1} createNewElement = {this.createNewElement}/>]
            
            for (let i = 0; i < this.state.documentElements.length; ++i) {
                documentContentItems.push(this._getComponent(this.state.documentElements[i]));
                documentContentItems.push(<CreateNewElement index = {i} createNewElement = {this.createNewElement}/>);
            }

            return documentContentItems;
        }
    }

    _getComponent(documentElement) {
        switch (documentElement.type) {
            case "Paragraph":
                return <Paragraph paragraph = {documentElement} createNewElement = {this.createNewElement}
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
                        {this.props.parentItemID ? this._getDocumentsView() : null}
                    </div>
                </div>
            </div>
        )
    }
}