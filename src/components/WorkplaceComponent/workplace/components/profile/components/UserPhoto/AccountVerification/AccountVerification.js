import React, {Component} from "react";

//Styles
import "./AccountVerificationStyles.css";

export default class AccountVerification extends Component { 
    constructor(props){ 
        super(props);

        this.state = { 
            inputValue: ""
        };

        this.handleInputValueChange = this.handleInputValueChange.bind(this);
    }

    handleInputValueChange(event) {
        this.setState({ 
            inputValue: event.target.value
        });
    }

    render() { 
        return (
            <div id = "accountVerificationOutterContainer">
                <div id = "accountVerificationText">
                    Enter the code from the last e-mail. If you don't verify your account, it will be blocked.
                </div>
                <div id = "enterCodeContainer">
                    <input id = "accountVerificationCodeInput" type = "text"
                        onChange = {this.handleInputValueChange} />
                    <button id = "sendConfirmationCodeBtn">
                        Send
                    </button>
                </div>
            </div>
        );
    }
}