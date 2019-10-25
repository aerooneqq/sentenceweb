import React, {Component} from "react";
import screenfull from "screenfull";

//Styles
import "./FullScreenBtnStyles.css";

//Icons
import fullScreenIcon from "./img/full_screen_icon.svg";

export default class FullScreenBtn extends Component { 
    constructor(props) {
        super(props);
    }

    handleBtnClick() { 
        if (screenfull.isEnabled) { 
            if (!screenfull.isFullscreen) { 
                screenfull.request();
            }
            else { 
                screenfull.exit();
            }
        }
    }

    render() { 
        return ( 
            <button id = "fullScreenBtn" onClick = {this.handleBtnClick}>
                <svg version="1.0" 
                     id = "fullScreenBtnSvg"
                     xmlns="http://www.w3.org/2000/svg"
                     width="30.000000px" 
                     height="30.000000px"
                     viewBox="0 0 120.000000 120.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                       fill="#ffffff" stroke="none">
                        <path d="M40 654 c0 -166 2 -185 16 -180 9 3 18 6 20 6 2 0 4 72 4 160 l0 160
                                420 0 420 0 0 -340 0 -340 -160 0 c-88 0 -160 -2 -160 -4 0 -2 -3 -11 -6 -20
                                -5 -14 14 -16 180 -16 l186 0 0 380 0 380 -460 0 -460 0 0 -186z"/>
                        <path d="M700 720 c0 -17 7 -20 42 -20 l43 0 -103 -103 c-56 -56 -102 -110
                                -102 -120 0 -37 39 -13 137 85 l103 103 0 -43 c0 -35 3 -42 20 -42 18 0 20 7
                                20 80 l0 80 -80 0 c-73 0 -80 -2 -80 -20z"/>
                        <path d="M40 260 l0 -180 260 0 260 0 0 180 0 180 -260 0 -260 0 0 -180z"/>
                    </g>
                </svg>
            </button>
        )
    }
} 