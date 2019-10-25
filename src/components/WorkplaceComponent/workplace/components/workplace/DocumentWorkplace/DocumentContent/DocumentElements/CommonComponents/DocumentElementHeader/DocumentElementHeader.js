import React, {Component} from "react";

//Styles
import "./DocumentElementHeaderStyles.css";

/**
 * PROPS LIST: 
 * 1) headerText
 */
export default class DocumentElementHeader extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            headerInputValue: props.headerText
        }

        this.onHeaderInputValueChange = this.onHeaderInputValueChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onHeaderInputValueChange(event) { 
        this.setState({ 
            headerInputValue: event.target.value
        });
    }

    handleClick() { 
        this.props.setUserWorkingStatus(true);
    }

    render() { 
        return ( 
            <div className = "documentElementHeaderOutterCont">
                <div className = "documentElementHeaderInnerCont"> 
                    <input className = "documentElementHeaderText" value = {this.state.headerInputValue}
                           onChange = {this.onHeaderInputValueChange} onClick = {this.handleClick} />
                </div>
            </div>
        )
    }
}