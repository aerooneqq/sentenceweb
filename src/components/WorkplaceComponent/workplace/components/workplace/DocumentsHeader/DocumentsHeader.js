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
            scrollBar: null,
            isScrollBarVisible: false,
            scrollBarContStyle: {},
            scrollBarThumbStyle: {}            
        };

        this.setContainersSizesToState = this.setContainersSizesToState.bind(this);
        this.scroll = this.scroll.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this._getScrollDistance = this._getScrollDistance.bind(this);
    }

    componentDidMount() { 
        this.setContainersSizesToState();
        this.props.getDocumentHeaderState();
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
                        {this.props.openedDocuments.map(openedDoc => {
                            return ( 
                                <DocumentHeaderCell openedDoc = {openedDoc}
                                                    changeSelectedDocument = {this.props.changeSelectedDocumentInHeader} />
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