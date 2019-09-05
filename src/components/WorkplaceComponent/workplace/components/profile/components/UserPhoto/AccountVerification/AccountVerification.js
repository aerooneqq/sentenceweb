import React, {Component} from "react";

//Styles
import "./AccountVerificationStyles.css";

//Services
import CodesService from "../../../../../../../../services/CodesServices/CodesService";
import UserService from "../../../../../../../../services/UserServices/UserService";

//Icons
import verifiedAccountIcon from "./img/user_account_verified.png";

//Components
import Loader from "../../../../../../../loader/Loader";

//App messages
import {alertAppMessage} from "../../../../../../../ApplicationMessage/ApplicationMessageManager";


export default class AccountVerification extends Component { 
    constructor(props){ 
        super(props);

        this.codesService = new CodesService(localStorage.getItem("token"));
        this.userService = new UserService(localStorage.getItem("token"));

        this.state = { 
            inputValue: "",
            isLoading: true,
            isAccVerified: null
        };

        this.handleInputValueChange = this.handleInputValueChange.bind(this);
        this.handleSendCodeClick = this.handleSendCodeClick.bind(this);
        this.checkIfAccVerified = this.checkIfAccVerified.bind(this);
    }

    componentDidMount() { 
        this.checkIfAccVerified(); 
    } 

    checkIfAccVerified() { 
        this.userService.getPartialData(["isAccountVerified"])
            .then(res => { 
                this.setState({ 
                    isLoading: false,
                    isAccVerified: res.data.isAccountVerified
                });
            }).catch(er => { 
                if (er.reponse) { 
                    alertAppMessage(er.response.data, "error");
                }
            });
    }

    handleInputValueChange(event) {
        this.setState({ 
            inputValue: event.target.value
        });
    }

    handleSendCodeClick(event) { 
        let code = document.getElementById("accountVerificationCodeInput").value;

        this.setState({ 
            isLoading: true
        });

        this.codesService.activateAccount(code).then(res => { 
            if (res.status === 200) { 
                alertAppMessage("The account is verified.", "success");
                this.checkIfAccVerified();
            } 
        }).catch(er => { 
            if (er.response) { 
                alertAppMessage(er.response.data, "error");
            }
            else { 
                alertAppMessage("Unknown error did happen.", "error");
            }

            this.setState({
                isLoading: false
            });
        });
    }

    render() { 
        return (
            <div id = "accountVerificationOutterContainer">
                {this.state.isLoading === true ? 
                    <Loader message = "Getting verification data..." />
                    : 
                    this.state.isAccVerified === true ? 
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
                                <button id = "sendConfirmationCodeBtn" onClick = {this.handleSendCodeClick}>
                                    Send
                                </button>
                            </div>
                        </div>
                }

            </div>
        );
    }
}