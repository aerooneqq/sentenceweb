import React from "react";
import MessageInputBox from "./MessageInputBox";

var messageInputBox = <MessageInputBox />
var showFunc = null;

function showInputMessageBox(header, newInputs, okCallback, cancelCallback) {
    showFunc(header, newInputs, okCallback, cancelCallback);
}

function setShowFunc(show) {
    showFunc = show;
}

function getMessageInputBox() {
    return messageInputBox;
}

export {showInputMessageBox, getMessageInputBox, setShowFunc}