import React, {Component, lazy} from "react";

//Styles
import "./DocumentTreeComponentStyles.css";

//Components
import DragableTreeItem from "./DocumentTreeItem/DragableTreeItem";
import DocumentStructureService
    from "../../../../../../../../services/DocumentStructureService/DocumentStructureService";

export default class DocumentTreeComponent extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            closed: false,
            paragraph: props.paragraph
        };

        this.nestedContainerID = "nestedItemsContainer" + props.paragraph.id
        this.documentStructureService = new DocumentStructureService(localStorage.getItem("token"));

        this.handleTreeItemClick = this.handleTreeItemClick.bind(this);
    }

    componentDidMount() { 
        if (this.props.paragraph.selected) { 
            document.getElementById(this.state.itemNameID).classList.toggle("documentTreeItemNameSelected");
        }
    }

    handleTreeItemClick() { 
        let itemsContainer = document.getElementById(this.nestedContainerID);

        if (this.props.paragraph.type === "list") { 
            if (this.state.closed) { 
                //Remove the hidden class which was used to set the display property to 'none'
                itemsContainer.classList.remove("hidden");
                
                itemsContainer.classList.toggle("nestedItemsContainerFadeIn");
                itemsContainer.classList.remove("nestedItemsContainerFadeOut");
            }
            else {
                itemsContainer.classList.toggle("nestedItemsContainerFadeOut");
                itemsContainer.classList.remove("nestedItemsContainerFadeIn");
                
                //This is used to set the display value from block to "none" for the nested container,
                //after the fade out CSS animation has finished. The timeout must be equal to the
                //CSS animation duration (0.2s)
                setTimeout(() => { 
                    document.getElementById(this.nestedContainerID).classList.toggle("hidden");
                }, 200);
            }
    
            this.setState(state => {
                return { 
                    closed: !state.closed
                } 
            });
        }
        else { 
            this.props.changeCurrentContentParagraph(this.props.paragraph);
        }
    }

    /**
     * Setting the z-index for all documentTreeContainers is essential, in order to make context menu
     * display correctly.
     */
    render() { 
        return ( 
            <div className = "documentTreeContainer" style = {{position: "relative", zIndex: -this.props.paragraph.id}}>
                <DragableTreeItem paragraph = {this.state.paragraph}
                                  handleTreeItemClick = {this.handleTreeItemClick}/>

                <div id = {this.nestedContainerID} className = "nestedItemsContainer">
                    {this.props.paragraph.paragraphs === undefined ? null :
                        this.props.paragraph.paragraphs.map(paragraph => 
                        {
                            return <DocumentTreeComponent paragraph = {paragraph} 
                                 changeCurrentContentParagraph = {this.props.changeCurrentContentParagraph}/>
                        })}
                </div>
            </div>
        );
    }
}