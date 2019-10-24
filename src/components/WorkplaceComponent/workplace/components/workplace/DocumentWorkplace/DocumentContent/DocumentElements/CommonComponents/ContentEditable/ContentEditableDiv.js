import React, {Component} from "react";
import ReactDOM from "react-dom";

//Styles
import "./ContentEditableDivStyles.css";

export default class ContentEditableDiv extends Component { 
    constructor(props) { 
        super(props);

        this.lastText = props.text;

        this._getThisEditableText = this._getThisEditableText.bind(this); 
        this.updateEditableDivText = this.updateEditableDivText.bind(this);
    }

    shouldComponentUpdate(nextProps) { 
        if (!nextProps) 
            return false;

        return this._getThisEditableText() !== nextProps.text;
    }

    _getThisEditableText() { 
        return ReactDOM.findDOMNode(this).innerHtml;
    }

    updateEditableDivText() { 
        let currentText = this._getThisEditableText();

        if (this.props.onChange && this.lastText != currentText) {
            this.props.onChange({ 
                target: { 
                    value: currentText
                }
            });
        }

        this.lastText = currentText;
    }

    render() { 
        return ( 
            <div className = "contentEditableDiv" 
                 contentEditable = {true}
                 onInput = {this.updateEditableDivText}
                 onBlur = {this.updateEditableDivText}>
                {this.props.text}
            </div>
        )
    }
}