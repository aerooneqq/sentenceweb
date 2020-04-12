import React, {Component} from "react";
import ReactDOM from "react-dom";

import SingleInput from "./SingleInput/SingleInput";

import "./MessageInputBox.css";
import MessageInputBoxBtn from "./MessageInputBoxBtn/MessageInputBoxBtn";

import {setShowFunc} from "./MessageInputBoxManager";

export default class MessageInputBox extends Component {
    constructor(props) {
        super(props);

        this.singleInputs = [];
        this.okCallback = null;
        this.cancelCallback = null;
        this.userValues = {}

        this.state = {
            inputs: [],
            visible: false,
            header: "",
        };

        this.show = this.show.bind(this);
        this._getContainerClass = this._getContainerClass.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.changeUserValue = this.changeUserValue.bind(this);

        setShowFunc(this.show);
    }

    show(header, newInputs, okCallback, cancelCallback) {
        this.setState({
            inputs: null,
        }, () => {
            this.okCallback = okCallback;
            this.cancelCallback = cancelCallback;
            this.userValues = {}
    
            this.setState({
                inputs: newInputs.map(input => {
                    this.userValues[input.title] = input.value ? input.value : "";
                    return <SingleInput title = {input.title} value = {input.value ? input.value : ""}
                                        changeUserValue = {this.changeUserValue}/>                                        
                }),
                visible: true,
                header: header,
            });
        })
    }

    changeUserValue(key, newValue) {
        this.userValues[key] = newValue;
    }

    handleOkClick() {
        this.setState({
            visible: false,
        });

        this.okCallback(this.userValues);
    }

    handleCancelClick() {
        this.setState({
            visible: false
        });
    }

    _getContainerClass() {
        return this.state.visible ? "message-input-box-container visible-message-input-box"
                : "message-input-box-container invisible-message-input-box";
    }

    render() {
        return (
            <div className = {this._getContainerClass()}>
                <div className = "message-input-box-header">
                    {this.state.header}
                </div>
                {this.state.inputs}
                <div className = "message-input-box-buttons">
                    <MessageInputBoxBtn content = "Cancel" background = "red" handleClick = {this.handleCancelClick} />
                    <MessageInputBoxBtn content = "OK" background = "green" handleClick = {this.handleOkClick} />
                </div>

            </div>
        )
    }
}