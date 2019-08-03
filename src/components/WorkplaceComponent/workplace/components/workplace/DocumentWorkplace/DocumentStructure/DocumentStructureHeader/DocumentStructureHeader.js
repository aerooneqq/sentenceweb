import React, {Component, lazy} from "react"

//Styles
import "./DocumentStructureHeaderStyles.css"

//Components
const WorkplaceSearch = lazy(() => import("../../../../search/WorkplaceSearch"));

export default class DocumentStructureHeader extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            searchOn: false
        };

        this.handleSearcIconClick = this.handleSearcIconClick.bind(this);
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
                    <WorkplaceSearch />
                </div> 
                <span id = "openedTreeItemContainer">
                    {this.props.openedTreeItem.name}
                </span>
                <div className = "fillContainer" />
                <div id = "searchIconContainer" onClick = {this.handleSearcIconClick} />
            </div>
        )
    }
}
