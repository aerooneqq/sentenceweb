import React, {Component} from "react";

//Styles
import "./styles/DeleteBtnStyles.css";

export default class DeleteSubBtn extends Component{ 
    constructor(props){ 
        super(props);
    }

    render(){ 
        return( 
            <button class = "deleteSubBtn">
                Delete
            </button>
        )
    }
}