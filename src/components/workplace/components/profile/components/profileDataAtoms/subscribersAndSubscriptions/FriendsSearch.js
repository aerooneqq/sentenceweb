import React, {Component} from "react"

//Styles
import "./styles/FriendsSearchStyles.css"

export default class FriendsSearch extends Component { 
    constructor(props) {
        super(props);

        this.state = { 
            value: null
        };

        this.handleInputValueChange = this.handleInputValueChange.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
    }

    handleInputValueChange(event) { 
        this.setState({ 
            value: event.target.value
        });
    }

    componentDidMount(){ 
        let friendsSearch = document.getElementById("friendsSearchInput");
        let friendsSearchHelp = document.getElementById("friendsSearchInputHelpCont");

        friendsSearch.addEventListener("focus", this.handleInputFocus);
        friendsSearch.addEventListener("focusout", this.handleInputLostFocus);

        friendsSearchHelp.classList.toggle("fadeOutAnimation");
    }

    handleInputLostFocus(){ 
        let friendsSearchHelp = document.getElementById("friendsSearchInputHelpCont"); 
        friendsSearchHelp.classList.remove("fadeInAnimation");
        friendsSearchHelp.classList.toggle("fadeOutAnimation");
    }

    handleInputFocus() {
        let friendsSearchHelp = document.getElementById("friendsSearchInputHelpCont"); 
        friendsSearchHelp.classList.remove("fadeOutAnimation");
        friendsSearchHelp.classList.toggle("fadeInAnimation");
    }

    render() {
        return(
            <div>
                <div id = "friendsSearch">
                    <input type = "text"    
                        id = "friendsSearchInput"
                        value = {this.state.value} 
                        onChange = {this.handleInputValueChange}
                        placeholder="Enter the query..." />
                </div>
                <div id = "friendsSearchInputHelpCont">
                    Press enter
                </div>
            </div>
        );
    }
}