import React, {Component} from "react"; 
import {ContextMenuTrigger} from "react-contextmenu";

//Images
import listParagraphIcon from "./img/document_structure_list_paragraph_icon.png"
import contentParagraphIcon from "./img/document_structure_conten_paragraph_icon.png"

//Styles
import "./DocumentTreeItemStyles.css";

//Components 
import DocumentTreeItemContextMenu from "./ContextMenu/DocumentTreeItemContextMenu";

export default class DocumentTreeItem extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            isEidtable: false,
            paragraphName: props.paragraph.name,
            inputID: "documentStructureParagraphName" + props.paragraph.id,
        };
        
        this.contextMenuID = "documentTreeItemContextMenu" + props.paragraph.id;

        this.handleParagraphInputValueChange = this.handleParagraphInputValueChange.bind(this);
        this.changeInputEditability = this.changeInputEditability.bind(this);
        this.disableInput = this.disableInput.bind(this);
    }

    componentDidMount() { 
        let input = document.getElementById(this.state.inputID);
        
        input.value = this.state.paragraphName;
        input.setAttribute("disabled", "disabled");

        this._setInputWidth(document.getElementById(this.state.inputID));
    }

    /**
     * Sets an input width depending on its value
     */
    _setInputWidth(input) { 
        input.style.width = (input.value.length + 1) * 6.2 + "px";
    }

    handleParagraphInputValueChange(event) { 
        this._setInputWidth(document.getElementById(this.state.inputID));
        alert(this.state.paragraphName);
        this.setState({ 
            paragraphName: event.target.value
        });
    }

    /**
     * If the input was enabled, then adds the "disabled" attribute to the input of this tree item,
     * otherwise removes this attribute.
     */
    changeInputEditability() {
        let input = document.getElementById(this.state.inputID);
        
        if (this.state.isEditable) { 
            input.setAttribute("disabled", "disabled");
        }
        else { 
            input.removeAttribute("disabled");
            input.focus();
        }

        this.setState(state => { 
            return { 
                isEditable: !state.isEditable
            }
        });
    }

    disableInput() { 
        document.getElementById(this.state.inputID).setAttribute("disabled", "disabled");  
        
        this.setState(() => { 
            return { 
                isEditable: false
            }
        });
    }

    render() { 
        return (
            <div>
                <ContextMenuTrigger id = {this.contextMenuID}>
                    <div className = "documentTreeItem" onClick = {this.props.handleTreeItemClick}>
                        <div className = "documentTreeItemIconContainer">
                            <img className = "documentTreeItemIcon" 
                                src = {this.props.paragraph.type === "list" ? listParagraphIcon : contentParagraphIcon} 
                                alt = "" />
                        </div>
                        <input id = {this.state.inputID}
                               className = "documentTreeItemNameInput" 
                               type = "text"
                               onChange = {this.handleParagraphInputValueChange} 
                               onBlur = {this.disableInput}/>
                    </div>
                </ContextMenuTrigger>

                <DocumentTreeItemContextMenu contextMenuID = {this.contextMenuID} 
                                             changeInputEditability = {this.changeInputEditability}/>
            </div> 
        );
    }
}