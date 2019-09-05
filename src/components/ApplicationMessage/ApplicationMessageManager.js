import React from "react"
import ApplicationMessage from "./ApplicationMessage";

var alertAppMessageFunc = null;
var messages = []

function alertAppMessage(message, type) { 
    messages.push(<ApplicationMessage message = {message} type = {type} number = {messages.length} />);

    alertAppMessageFunc(messages)
    setTimeout(() => { 
        if (messages.length > 0 ) { 
            messages.pop();
            alertAppMessageFunc(messages);
        }
    }, 2500);
}

function setAppMesageParams(alertFunc) { 
    alertAppMessageFunc = alertFunc;
}

export {alertAppMessage, setAppMesageParams}
