import React, {Component, lazy} from "react";

//Styles
import "./DocumentTreeComponentStyles.css";

//Components
import DragableTreeItem from "./DocumentTreeItem/DragableTreeItem";

export default class DocumentTreeComponent extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            closed: false,
            itemID: props.itemID,
            itemsToDisplay: null
        };

        this.nestedContainerID = "nestedItemsContainer" + props.item.id;

        this.handleTreeItemClick = this.handleTreeItemClick.bind(this);
        this.addListItem = this.addListItem.bind(this);
        this.addContentItem = this.addContentItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleTreeItemClick = this.handleTreeItemClick.bind(this);
        this._findElementsToDisplay = this._findElementsToDisplay.bind(this);
        this._findThisNodeInTree = this._findThisNodeInTree.bind(this);
    }

    _findElementsToDisplay() {
        let thisNode = this._findThisNodeInTree();

        this.setState({
            itemsToDisplay: thisNode.items
        });
    }

    _findThisNodeInTree() {
        if (this.props.itemID === this.props.documentTree.itemID) {
            return this.props.documentTree;
        }

        let stack = []

        for (let el in this.props.documentTree.items) {
            stack.push(el);
        }

        while (stack.length !== 0) {
            let poppedEl = stack.pop();

            if (poppedEl.itemID === this.props.itemID) {
                return poppedEl;
            }

            for (let el in poppedEl.items) {
                stack.push(el);
            }
        }

        return null;
    }

    componentDidMount() { 
        if (this.props.item.selected) {
            document.getElementById(this.state.itemNameID).classList.toggle("documentTreeItemNameSelected");
        }
    }

    handleTreeItemClick() { 
        let itemsContainer = document.getElementById(this.nestedContainerID);

        if (this.props.item.type === "list") {
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
            this.props.changeCurrentContentParagraph(this.props.item);
        }
    }

    handleTreeItemDoubleClick() {

    }

    addListItem() {
        this.props.addListItem(this.props.item.itemID);
    }

    addContentItem() {
        this.props.addContentItem(this.props.item.itemID);
    }

    renameItem(newName) {
        this.props.renameItem(this.props.item.itemID, newName)
    }

    deleteItem() {
        this.props.deleteItem(this.props.item.itemID);
    }

    /**
     * Setting the z-index for all documentTreeContainers is essential, in order to make context menu
     * display correctly.
     */
    render() { 
        return ( 
            <div className = "documentTreeContainer" style = {{position: "relative", zIndex: -this.props.item.id}}>
                <DragableTreeItem item = {this.props.item}
                                  handleTreeItemClick = {this.handleTreeItemClick}
                                  addContentItem = {this.addContentItem}
                                  addListItem = {this.addListItem}
                                  renameItem = {this.renameItem}
                                  deleteItem = {this.deleteItem}/>

                <div id = {this.nestedContainerID} className = "nestedItemsContainer">
                    {this.props.item.items === undefined ? null :
                        this.props.item.items.map(item =>
                        {
                            return <DocumentTreeComponent item = {item}
                                                          changeCurrentContentParagraph = {this.props.changeCurrentContentParagraph}
                                                          addContentItem = {this.props.addContentItem}
                                                          addListItem = {this.props.addListItem}
                                                          renameItem = {this.props.renameItem}
                                                          deleteItem = {this.props.deleteItem}/>
                        })}
                </div>
            </div>
        );
    }
}