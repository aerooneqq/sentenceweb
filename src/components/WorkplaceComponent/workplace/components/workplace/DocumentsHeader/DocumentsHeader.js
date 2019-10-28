import React, {Component, lazy} from "react"
import ReactDOM from "react-dom";
import {isHidden, scrollX} from "../../../../../../services/Utility/UtilityFunctions";

//Styles
import "./DocumentsHeaderStyles.css"
import Scrollbar from "../../../../../Scrollbar/Scrollbar";

//Components
const DocumentHeaderCell = lazy(() => import("./DocumentHeaderCell/DocumentHeaderCell"))

export default class DocumentsHeader extends Component{ 
    constructor(props){ 
        super(props);

        this.outterContWidth = -1;
        this.innerContWidth = -1;

        this.state = { 
            openedDocuments: [
                {id: 0, name: "Test document sald asdl;sa dals;d ", isSaved: false, isSelected: false },
                {id: 1, name: "sald asdl;sa dals;d ", isSaved: true, isSelected: false },
                {id: 2, name: "Test document sald asdl;sa dals;d ", isSaved: true, isSelected: false },
                {id: 3, name: "Test document ;sa dals;d ", isSaved: true, isSelected: false },
                {id: 4, name: "Test document sald asdl;sa dals;d ", isSaved: false, isSelected: true },
                {id: 5, name: "sald asdl;sa dals;d ", isSaved: true, isSelected: false },
                {id: 6, name: "Test document sald asdl;sa dals;d ", isSaved: false, isSelected: false },
                {id: 7, name: "Test document asdl;sa dals;d ", isSaved: true, isSelected: false },
                {id: 8, name: "Test document sald asdl;sa dals;d ", isSaved: true, isSelected: false },
                {id: 9, name: "Test document sald asdl;sa dals;d ", isSaved: true, isSelected: false },
                {id: 10, name: "Test document asdl;sa dals;d ", isSaved: true, isSelected: false }
            ],
            scrollBar: null,
            isScrollBarVisible: false,
            scrollBarContStyle: {},
            scrollBarThumbStyle: {}            
        }

        this.changeSelectedDocument = this.changeSelectedDocument.bind(this);
        this.setContainersSizesToState = this.setContainersSizesToState.bind(this);
        this.scroll = this.scroll.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this._getScrollDistance = this._getScrollDistance.bind(this);
    }

    componentDidMount() { 
        this.setContainersSizesToState();
    }

    _getScrollDistance(delta) { 
        let freeSpace = this.outterContWidth - this.outterContWidth * this.outterContWidth / this.innerContWidth;
        let takenPart = delta / freeSpace;

        return takenPart * (this.innerContWidth - this.outterContWidth); 
    }

    scroll(delta) { 
        scrollX(ReactDOM.findDOMNode(this).getElementsByTagName("div")[0],
            this._getScrollDistance(delta));
    }

    setContainersSizesToState() {
        let outterContSize = ReactDOM.findDOMNode(this).getElementsByTagName("div")[0].clientWidth;
        let innerContSize = ReactDOM.findDOMNode(this).getElementsByTagName("div")[0]
            .getElementsByTagName("div")[0].clientWidth;

        if (isHidden(ReactDOM.findDOMNode(this)) ||
            isHidden(ReactDOM.findDOMNode(this).getElementsByTagName("div")[0])) { 
            setTimeout(() => this.setContainersSizesToState(), 50); 
        }
        else { 
            this.outterContWidth = outterContSize;
            this.innerContWidth = innerContSize;

            let scrollBarContStyle = { 
                height: "10px",
                width: "100%",
                background: "transparent"
            }
    
            let scrollBarThumbStyle = { 
                background: "#F97626",
                opacity: 0.4,
                width: outterContSize * (outterContSize / innerContSize) + "px",
                height: "10px"
            }

            this.setState({ 
                isScrollBarVisible: false,
                scrollBarContStyle: scrollBarContStyle,
                scrollBarThumbStyle: scrollBarThumbStyle,
            });
        }
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

    handleMouseEnter() { 
        console.log(true)
        this.setState({ 
            isScrollBarVisible: true
        });
    }

    handleMouseLeave() { 
        this.setState({ 
            isScrollBarVisible: false
        });
    }

    render() { 
        return ( 
            <div id = "documentsHeaderOutterContainer" 
                 onMouseEnter = {this.handleMouseEnter}
                 onMouseLeave = {this.handleMouseLeave}>
                <div id = "documentsHeaderScrollableItems">
                    <div id = "documentsHeaderInnerContainer">
                        {this.state.openedDocuments.map(openedDoc => { 
                            return ( 
                                <DocumentHeaderCell openedDoc = {openedDoc}
                                                    changeSelectedDocument = {this.changeSelectedDocument} />
                            )
                        })}
                    </div>
                </div>

                <div id = "headerScrollBarCont">
                    <Scrollbar orientation = {true} 
                               outterStyle = {this.state.scrollBarContStyle}
                               thumbStyle = {this.state.scrollBarThumbStyle} 
                               scroll = {this.scroll}
                               visible = {this.state.isScrollBarVisible} />
                </div>
            </div>
        );
    }
}