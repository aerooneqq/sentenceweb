import React, {Component} from "react"

//Styles
import "./FriendsSearchStyles.css"

export default class FriendsSearch extends Component { 
    constructor(props) {
        super(props);

        this.state = { 
            value: null
        };

        this.handleInputValueChange = this.handleInputValueChange.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleSearchInputKeyEnter = this.handleSearchInputKeyEnter.bind(this);
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

    handleSearchInputKeyEnter(target){ 
        if (target.charCode === 13){ 
            let searchInput = document.getElementById("friendsSearchInput").value;
            this.props.searchForUsers(searchInput);
        }
    }

    render() {
        return(
            <div>
                <div id = "friendsSearch">
                    <input type = "text"    
                           id = "friendsSearchInput"
                           value = {this.state.value} 
                           onChange = {this.handleInputValueChange}
                           onKeyPress = {this.handleSearchInputKeyEnter}
                           placeholder="Enter the query..." />
                </div>
                <div id = "friendsSearchInputHelpCont">
                    Press enter
                </div>
            </div>
        );
    }
}