import React, {Component} from "react";

//Styles
import "./ViewUserPageBtnStyles.css"

export default class ViewUserPageBtn extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){ 
        return( 
            <button className = "viewUserPageBtn">
                View
            </button>
        )
    }
}