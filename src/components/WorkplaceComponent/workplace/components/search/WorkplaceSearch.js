import React, {Component} from "react"

//Styles
import "./WorkplaceSearchStyles.css"

export default class WorkplaceSearch extends Component { 
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
        let workplaceSearch = document.getElementById("workplaceSearchInput");
        let workplaceSearchHelp = document.getElementById("workplaceSearchInputHelpCont");

        workplaceSearch.addEventListener("focus", this.handleInputFocus);
        workplaceSearch.addEventListener("focusout", this.handleInputLostFocus);

        workplaceSearchHelp.classList.toggle("fadeOutAnimation");
    }

    handleInputLostFocus(){ 
        let workplaceSearchHelp = document.getElementById("workplaceSearchInputHelpCont"); 
        workplaceSearchHelp.classList.remove("fadeInAnimation");
        workplaceSearchHelp.classList.toggle("fadeOutAnimation");
    }

    handleInputFocus() {
        let workplaceSearchHelp = document.getElementById("workplaceSearchInputHelpCont"); 
        workplaceSearchHelp.classList.remove("fadeOutAnimation");
        workplaceSearchHelp.classList.toggle("fadeInAnimation");
    }

    handleSearchInputKeyEnter(target){ 
        if (target.charCode === 13){ 
            let searchInput = document.getElementById("workplaceSearchInput").value;
            this.props.search(searchInput);
        }
    }

    render() {
        return(
            <div>
                <div id = "workplaceSearch">
                    <input type = "text"    
                           id = "workplaceSearchInput"
                           style = {{backgroundColor: this.props.backgroundColor === undefined ? "white" : this.props.backgroundColor}}
                           value = {this.state.value} 
                           onChange = {this.handleInputValueChange}
                           onKeyPress = {this.handleSearchInputKeyEnter}
                           placeholder="Enter the query..." />
                </div>
                <div id = "workplaceSearchInputHelpCont"
                     style = {{backgroundColor: this.props.backgroundColor === undefined ? "white" : this.props.backgroundColor}}>
                    Press enter
                </div>
            </div>
        );
    }
}