import React, {Component} from "react";

//Styles
import "./AccountVerificationStyles.css";

//Icons
import verifiedAccountIcon from "./img/user_account_verified.png";

export default class AccountVerification extends Component { 
    constructor(props){ 
        super(props);

        this.state = { 
            inputValue: "",
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

                {this.props.isVerified === true ? 
                    <div id = "verifiedAccountContainer">
                        <img src = {verifiedAccountIcon} id = "verifiedAccountIcon"
                             alt = "Account verified"/>
                        <div id = "verifiedAccountText">
                            Your account is verified
                        </div>
                    </div>
                 :
                    <div>
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
                }

            </div>
        );
    }
}