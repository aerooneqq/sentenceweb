import React, {Component} from "react";

import "./MessageInputBoxBtn.css";

export default class MessageInputBoxBtn extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.handleClick();
    }

    render() {
        return (
            <button className = "message-input-box-btn" 
                    style = {{"background-color": this.props.background}}
                    onClick = {this.handleClick}>
                {this.props.content}
            </button>
        )
    }
}