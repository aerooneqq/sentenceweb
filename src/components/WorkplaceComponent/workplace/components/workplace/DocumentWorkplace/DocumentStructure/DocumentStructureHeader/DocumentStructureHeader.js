import React, {Component, lazy} from "react";

//Icons
import searchIcon from  "./img/document_structure_header_search_icon.png";
import searchIconActive from "./img/document_structure_header_search_icon_active.png";

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

        this.handleSearcIconClick = this.handleSearcIconClick.bind(this);
        this.handleSearchIconMouseOver = this.handleSearchIconMouseOver.bind(this);
    }

    handleSearcIconClick() {
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
    
    handleSearchIconMouseOver() { 
        this.setState(state => {
            return { 
                isSearchIconHovered: !state.isSearchIconHovered
            }
        });
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
                <div id = "searchIconContainer" onClick = {this.handleSearcIconClick}>
                    <img src = {this.state.isSearchIconHovered === true ? searchIconActive : searchIcon} alt = ""
                         onMouseEnter = {this.handleSearchIconMouseOver} onMouseLeave = {this.handleSearchIconMouseOver}/>
                </div>
            </div>
        )
    }
}