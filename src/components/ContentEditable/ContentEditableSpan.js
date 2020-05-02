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

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props) {
        ReactDOM.findDOMNode(this).innerHTML = props.text;
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).innerHTML = this.props.text;
    }

    handleChange(e) {
        this.props.onChange(ReactDOM.findDOMNode(this).innerHTML)
    }

    render() { 
        return ( 
            <span className = "contentEditableSpan"
                  style = {{"font-size": this.props.fontSize, 
                            "color": this.props.color,
                            "margin-top": (this.props.marginTop ? this.props.marginTop : 0) + "px",
                            "margin-right": (this.props.marginRight ? this.props.marginRight : 0) + "px",
                            "margin-left": (this.props.marginLeft ? this.props.marginLeft : 0) + "px",
                            "max-width": (this.props.maxWidth ? this.props.maxWidth : 10000000) + "px"}}  
                  contentEditable = {this.props.editable ? this.props.editable : true}
                  onInput = {this.handleChange}>
            </span>
        )
    }
}