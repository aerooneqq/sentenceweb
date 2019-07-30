import React, {Component} from "react"

//Styles
import "./HeaderMenuBtnStyles.css"

export default class HeaderMenuBtn extends Component{
    constructor(props){ 
        super(props);

        this.closed = true;
        this.handleMenuBtnClick = this.handleMenuBtnClick.bind(this);
    }

    handleMenuBtnClick(){ 
        if (this.closed){ 
            document.getElementById("headerMenuBtnTopLine").classList.remove("headerMenuBtnLineClosed");
            document.getElementById("headerMenuBtnTopLine").classList.toggle("headerMenuBtnLineOpened");
            document.getElementById("headerMenuBtnBottomLine").classList.remove("headerMenuBtnLineClosed");
            document.getElementById("headerMenuBtnBottomLine").classList.toggle("headerMenuBtnLineOpened");

            this.props.showOrHideMenuItems(this.closed)

            this.closed = false;
        }
        else { 
            document.getElementById("headerMenuBtnTopLine").classList.remove("headerMenuBtnLineOpened");
            document.getElementById("headerMenuBtnTopLine").classList.toggle("headerMenuBtnLineClosed");
            document.getElementById("headerMenuBtnBottomLine").classList.remove("headerMenuBtnLineOpened");
            document.getElementById("headerMenuBtnBottomLine").classList.toggle("headerMenuBtnLineClosed");

            this.props.showOrHideMenuItems(this.closed)
            
            this.closed = true;
        }
    }

    render() { 
        return ( 
            <div id = "headerMenuBtnCont"
                 onClick = {this.handleMenuBtnClick}>
                <div id = "headerMenuBtnTopLine" className = "headerMenuBtnLine"  />
                <div id = "headerMenuBtnBottomLine" className = "headerMenuBtnLine" />
            </div>
        );
    }
}