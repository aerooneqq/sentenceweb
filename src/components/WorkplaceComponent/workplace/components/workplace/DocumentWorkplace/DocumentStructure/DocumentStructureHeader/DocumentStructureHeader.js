import React, {Component, lazy} from "react";

//Icons
import searchIcon from  "./img/document_structure_header_search_icon.svg";

//Styles
import "./DocumentStructureHeaderStyles.css";

//Components
const WorkplaceSearch = lazy(() => import("../../../../search/WorkplaceSearch"));

export default class DocumentStructureHeader extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            searchOn: false,
            isSearchIconHovered: false
        };

        this.handleSearchIconClick = this.handleSearchIconClick.bind(this);
    }

    handleSearchIconClick() {
        let inputContainer = document.getElementById("documentStructureHeaderInput");

        if (this.state.searchOn) { 
            inputContainer.classList.remove("documentStructureHeaderInputFadeIn");
            inputContainer.classList.toggle("documentStructureHeaderInputFadeOut");
        }
        else { 
            inputContainer.classList.toggle("documentStructureHeaderInputFadeIn");
            inputContainer.classList.remove("documentStructureHeaderInputFadeOut");

            inputContainer.focus();
        }

        this.setState(state => {
            return { 
                searchOn: !state.searchOn
            }
        })
    }

    render() { 
        return (
            <div id = "documentStructureHeaderCont">
                <div id = "documentStructureHeaderInput"> 
                    <WorkplaceSearch search = {this.props.findContentParagrahsWithName}
                                     backgroundColor = "#f3f3f3"/>
                </div> 
                <div id = "openedTreeItemContainer">
                    <span id = "openedTreeItemDescription">Now opened: </span>
                    <span id = "openedTreeItemName">
                        {this.props.openedParagraph === null ? "" : this.props.openedParagraph.name}
                    </span>
                </div>
                <div className = "fillContainer" />
                <div id = "searchIconContainer" onClick = {this.handleSearchIconClick}>
                    <img className = "documentStructureSearch" src = {searchIcon} alt = "Search" />
                </div>
            </div>
        )
    }
}