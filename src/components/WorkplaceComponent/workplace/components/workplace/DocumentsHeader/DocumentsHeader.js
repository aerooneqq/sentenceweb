import React, {Component, lazy} from "react"

//Styles
import "./DocumentsHeaderStyles.css"

//Components
const DocumentHeaderCell = lazy(() => import("./DocumentHeaderCell/DocumentHeaderCell"))

export default class DocumentsHeader extends Component{ 
    constructor(props){ 
        super(props);

        this.state = { 
            openedDocuments: [
                {id: 0, name: "Test document sald asdl;sa dals;d ", isSaved: false, isSelected: false },
                {id: 1, name: "Test document sald asdl;sa dals;d ", isSaved: true, isSelected: false },
                {id: 2, name: "Test document sald asdl;sa dals;d ", isSaved: true, isSelected: false },
                {id: 3, name: "Test document sald asdl;sa dals;d ", isSaved: true, isSelected: false },
                {id: 4, name: "Test document sald asdl;sa dals;d ", isSaved: false, isSelected: true },
                {id: 5, name: "Test document sald asdl;sa dals;d ", isSaved: true, isSelected: false },
                {id: 6, name: "Test document sald asdl;sa dals;d ", isSaved: false, isSelected: false },
                {id: 7, name: "Test document sald asdl;sa dals;d ", isSaved: true, isSelected: false }
            ]
        }

        this.changeSelectedDocument = this.changeSelectedDocument.bind(this);
    }

    /**
     * Sets the document with a given id to the opened mode.
     * Loads this document to the workplace via calling the method which comes from workplace.
     * @param {the id of the opened document document} id 
     */
    changeSelectedDocument(id){ 
        this.setState(prevState => { 
            for (let openedDoc of prevState.openedDocuments) { 
                openedDoc.isSelected = false;

                if (openedDoc.id === id){ 
                    openedDoc.isSelected = true;
                }
            }

            return { 
                openedDocuments: prevState.openedDocuments
            }
        })
    }

    render() { 
        return ( 
            <div id = "documentsHeaderOutterContainer">
                <div id = "documentsHeaderInnerContainer">
                    {this.state.openedDocuments.map(openedDoc => { 
                        return ( 
                            <DocumentHeaderCell openedDoc = {openedDoc}
                                                changeSelectedDocument = {this.changeSelectedDocument} />
                        )
                    })}
                </div>
            </div>
        );
    }
}