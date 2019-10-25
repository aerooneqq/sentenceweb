import React, {Component} from "react";
import ReactDOM from "react-dom";

//Styles
import "./ContentEditableDivStyles.css";

/**
 * PROPS LIST:
 * 1) setUserWorkingStatus
 * 2) text
 * 3) onChange
 */
export default class ContentEditableDiv extends Component { 
    constructor(props) { 
        super(props);

        this.lastText = props.text;

        this._getThisEditableText = this._getThisEditableText.bind(this); 
        this.updateEditableDivText = this.updateEditableDivText.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this); 
        this.handleInput = this.handleClick.bind(this);
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

    handleInput() { 
        this.updateEditableDivText();
    }

    handleBlur() { 
        this.props.setUserWorkingStatus(true);
        this.updateEditableDivText();
    }

    handleClick() { 
        this.props.setUserWorkingStatus(true);
    }

    render() { 
        return ( 
            <div className = "contentEditableDiv" 
                 contentEditable = {true}
                 onInput = {this.updateEditableDivText}
                 onBlur = {this.onBlur}
                 onClick = {this.handleClick}>
                {this.props.text}
            </div>
        )
    }
}