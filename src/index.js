import React from "react"
import ReactDOM from "react-dom"

import App from "./App";
document.execCommand("defaultParagraphSeparator", false, "p");
var rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)