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

        workplaceSearch.addEventListener("focus", this.handleInputFocus);
        workplaceSearch.addEventListener("focusout", this.handleInputLostFocus);
    }

    handleInputLostFocus(){ 
        let workplaceSearchHelp = document.getElementById("workplaceSearchInputHelpCont"); 

        workplaceSearchHelp.classList.remove("collapsed");
        workplaceSearchHelp.classList.remove("fadeInAnimation");
        workplaceSearchHelp.classList.toggle("fadeOutAnimation");
    }

    handleInputFocus() {
        let workplaceSearchHelp = document.getElementById("workplaceSearchInputHelpCont"); 

        workplaceSearchHelp.classList.remove("collapsed");
        workplaceSearchHelp.classList.remove("fadeOutAnimation");
        workplaceSearchHelp.classList.toggle("fadeInAnimation");
    }

    handleSearchInputKeyEnter(target){ 
        if (target.charCode === 13){ 
            let searchInput = document.getElementById("workplaceSearchInput").value;
            if (this.props.search) { 
                this.props.search(searchInput);
            }
        }
    }

    render() {
        return(
            <div>
                <div id = "workplaceSearch">
                    <input type = "text"    
                           id = "workplaceSearchInput"
                           style = {{backgroundColor: this.props.backgroundColor === undefined ? "white" : this.props.backgroundColor,
                                     "margin-top": (this.props.marginTop ? this.props.marginTop : 0) + "px"}}
                           value = {this.state.value} 
                           onChange = {this.handleInputValueChange}
                           onKeyPress = {this.handleSearchInputKeyEnter}
                           placeholder = "Enter the query..." />
                </div>
                <div id = "workplaceSearchInputHelpCont"
                     className = "collapsed"
                     style = {{backgroundColor: this.props.backgroundColor === undefined ? "white" : this.props.backgroundColor}}>
                    Press enter
                </div>
            </div>
        );
    }
}