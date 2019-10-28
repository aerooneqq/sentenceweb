import React, {Component} from "react";
import ReactDOM from "react-dom";

//Styles
import "./ScrollbarStyles.css";

/**
 * PROPS LIST:
 * 1) outterStyle - style of the scrollbar container
 *      1) width (if horizontal then set to 100%)
 *      2) height (if vertical then set to 100%)
 *      3) background
 * 
 * 2) thumbStyle - style of the thumb
 *      1) thumbColor
 *      2) thumbHoverColor
 *      3) thumbRadius
 *      4) Background
 * 
 * 3) thumbHoveredStyle - the style object, dont change the size of the thumb
 * 
 * 4) orientation (true for horizontal, false for vertical)
 * 
 * 5) scroll - the function to scroll
 */
export default class Scrollbar extends Component { 
    constructor(props) { 
        super(props);

        this.initialX = -1;
        this.initialY = -1;
        this.prevDistance = 0;

        this.state = { 
            isThumbHovered: false
        };

        this._getScrollbarOutterStyle = this._getScrollbarOutterStyle.bind(this);
        this._getScrollBarThumbStyle = this._getScrollBarThumbStyle.bind(this);
        this._getMouseCoordsDeltaX = this._getMouseCoordsDeltaX.bind(this);
        this._getMouseCoordsDeltaY = this._getMouseCoordsDeltaY.bind(this);
        this.handleThumbMouseEnter = this.handleThumbMouseEnter.bind(this);
        this.handleThumbMouseLeave = this.handleThumbMouseLeave.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    _getScrollBarVisibility() { 
        if (this.props.visible === true) { 
            return "visible";
        }

        if (this.initialX === -1 && this.initialY === -1) {
            return "collapse";
        }
        else return "visible";
    }

    _getScrollbarOutterStyle() { 
        let style = { };

        for (let key in this.props.outterStyle) { 
            style[key] = this.props.outterStyle[key];
        }

        style["position"] = "absolute";
        style["visibility"] = this._getScrollBarVisibility();

        //If the orientation is horizontal
        if (this.props.orientation === true) { 
            style["bottom"] = 0;
            style["right"] = 0;
        }
        else if (this.props.orientation === false) { 
            style["top"] = 0;
            style["right"] = 0;
        }

        return style;
    }

    _getScrollBarThumbStyle() { 
        let style = { };

        for (let key in this.props.thumbStyle) { 
            style[key] = this.props.thumbStyle[key];
        }

        style["position"] = "relative";
        return style;
    }

    handleMouseDown(event) { 
        this.initialX = event.clientX;
        this.initialY = event.clientY;

        document.onmousemove = (event) => { 
            let {clientX, clientY} = event;

            let size = this.props.orientation === true ?
                ReactDOM.findDOMNode(this).clientWidth :
                ReactDOM.findDOMNode(this).clientHeight;

            let thumbSize = this.props.orientation === true ?
                ReactDOM.findDOMNode(this).getElementsByTagName("div")[0].clientWidth :
                ReactDOM.findDOMNode(this).getElementsByTagName("div")[0].clientHeight;

            if (this.initialY !== -1 && this.initialX !== -1) { 
                let delta = this.props.orientation === true ? this._getMouseCoordsDeltaX(clientX) :
                    this._getMouseCoordsDeltaY(clientY);
    
                if (this.props.orientation === true) { 
                    this.initialX += delta;
                }
                else if (this.props.orientation === false) { 
                    this.initialY += delta
                }
    
                let newDistance = delta > 0 ? 
                                  Math.min(size - thumbSize, this.prevDistance + delta) :
                                  Math.max(0, this.prevDistance + delta);
                
                if (this.props.orientation === true) { 
                    ReactDOM.findDOMNode(this).getElementsByTagName("div")[0].style.left = newDistance + "px";
                }
                else if (this.props.orientation === false) { 
                    ReactDOM.findDOMNode(this).getElementsByTagName("div")[0].style.top = newDistance + "px";
                }

                this.prevDistance = newDistance;
                this.props.scroll(delta);
            }
        }

        document.onmouseup = () => { 
            document.onmousemove = null;
            this.initialY = this.initialX = -1;
        }
    }

    _getMouseCoordsDeltaX(currMouseX) { 
        return currMouseX - this.initialX;
    }

    _getMouseCoordsDeltaY(currMouseY) { 
        return currMouseY - this.initialY;
    }

    handleThumbMouseEnter() { 
        this.setState({ 
            isThumbHovered: true
        });
    }

    handleThumbMouseLeave() { 
        this.setState({ 
            isThumbHovered: false
        });
    }

    render() { 
        return (
            <div style = {this._getScrollbarOutterStyle()}>
                <div style = {this._getScrollBarThumbStyle()}
                     onMouseDown = {this.handleMouseDown}
                     onMouseEnter = {this.handleThumbMouseEnter}
                     onMouseLeave = {this.handleThumbMouseLeave} />
            </div>
        )
    }
}