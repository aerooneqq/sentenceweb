import React, {Component} from "react";

import "./HeaderBackForwardComponentStyles.css";
import {getFoldersHistoryManager} from "../../DocumentFoldersComponent/FoldersHistoryManager";

export default class HeaderBackForwardComponent extends Component { 

    constructor(props) { 
        super(props);

        this.goToNextFolder = this.goToNextFolder.bind(this);
        this.goToPrevFolder = this.goToPrevFolder.bind(this);
    }

    goToPrevFolder() { 
        getFoldersHistoryManager().getPreviousFolder();
    }

    goToNextFolder() {
        getFoldersHistoryManager().getNextFolder();
    }

    render() { 
        return ( 
            <div className = "backForwardComponentOutterCont">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
                    preserveAspectRatio="xMidYMid meet" className = "backForwardIcon"
                    onClick = {this.goToPrevFolder}>
                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path d="M415 950 c-108 -24 -179 -65 -256 -146 -124 -133 -151 -341 -67 -511
                        37 -77 132 -169 210 -206 276 -131 599 39 649 341 36 216 -92 432 -299 503
                        -66 23 -179 32 -237 19z m247 -87 c92 -43 151 -100 196 -191 35 -72 37 -81 37
                        -172 0 -91 -2 -100 -37 -172 -45 -91 -103 -147 -196 -191 -98 -47 -226 -47
                        -324 0 -93 44 -151 100 -196 191 -35 72 -37 81 -37 171 0 87 3 102 31 162 53
                        112 128 178 249 222 78 28 193 19 277 -20z"/>
                        <path d="M387 582 c-37 -37 -67 -74 -67 -83 0 -8 31 -46 69 -83 60 -59 72 -68
                        85 -56 24 19 20 32 -20 71 l-35 34 123 5 123 5 0 25 0 25 -124 3 -124 3 39 40
                        c31 32 36 43 28 56 -6 9 -15 18 -20 20 -5 2 -40 -27 -77 -65z"/>
                    </g>
                </svg>

                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
                        preserveAspectRatio="xMidYMid meet" className = "backForwardIcon"
                        onClick = {this.goToNextFolder}>
                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path d="M415 950 c-108 -24 -179 -65 -256 -146 -124 -133 -151 -341 -67 -511
                        37 -77 132 -169 210 -206 276 -131 599 39 649 341 36 216 -92 432 -299 503
                        -66 23 -179 32 -237 19z m247 -87 c92 -43 151 -100 196 -191 35 -72 37 -81 37
                        -172 0 -91 -2 -100 -37 -172 -45 -91 -103 -147 -196 -191 -98 -47 -226 -47
                        -324 0 -93 44 -151 100 -196 191 -35 72 -37 81 -37 171 0 87 3 102 31 162 53
                        112 128 178 249 222 78 28 193 19 277 -20z"/>
                        <path d="M387 582 c-37 -37 -67 -74 -67 -83 0 -8 31 -46 69 -83 60 -59 72 -68
                        85 -56 24 19 20 32 -20 71 l-35 34 123 5 123 5 0 25 0 25 -124 3 -124 3 39 40
                        c31 32 36 43 28 56 -6 9 -15 18 -20 20 -5 2 -40 -27 -77 -65z"/>
                    </g>
                </svg>
            </div>
        )
    }
}