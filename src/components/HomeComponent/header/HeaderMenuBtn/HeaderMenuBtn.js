import React, {Component} from "react"

//Styles
import "./HeaderMenuBtnStyles.css"

export default class HeaderMenuBtn extends Component{
    constructor(props){ 
        super(props);

        this.closed = true;
        this.handleMenuBtnClick = this.handleMenuBtnClick.bind(this);
        this._rotate = this._rotate.bind(this);
        this._changeStateWhenClicked = this._changeStateWhenClicked.bind(this);
    }

    _rotate() { 
        if (this.closed) { 
            document.getElementById("headerMenuBtnTopLine").classList.remove("headerMenuBtnLineClosed");
            document.getElementById("headerMenuBtnTopLine").classList.toggle("headerMenuBtnLineOpened");
            document.getElementById("headerMenuBtnBottomLine").classList.remove("headerMenuBtnLineClosed");
            document.getElementById("headerMenuBtnBottomLine").classList.toggle("headerMenuBtnLineOpened");
        }
        else { 
            document.getElementById("headerMenuBtnTopLine").classList.remove("headerMenuBtnLineOpened");
            document.getElementById("headerMenuBtnTopLine").classList.toggle("headerMenuBtnLineClosed");
            document.getElementById("headerMenuBtnBottomLine").classList.remove("headerMenuBtnLineOpened");
            document.getElementById("headerMenuBtnBottomLine").classList.toggle("headerMenuBtnLineClosed");
        }
    }

    _changeStateWhenClicked() { 
        if (this.closed){ 
            this.props.showOrHideMenuItems(this.closed);
            this.closed = false;
        }
        else { 
            this.props.showOrHideMenuItems(this.closed);
            this.closed = true;
        }
    }

    handleMenuBtnClick(){
        this._changeStateWhenClicked();
        this._rotate();
    }

    render() { 
        return ( 
            <div id = "headerMenuBtnCont" onClick = {this.handleMenuBtnClick}>
                <div id = "headerMenuBtnTopLine" className = "headerMenuBtnLine"  />
                <div id = "headerMenuBtnBottomLine" className = "headerMenuBtnLine" />
            </div>
        );
    }
}