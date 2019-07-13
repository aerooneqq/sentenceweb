import React, {Component} from "react"

import "./styles/SaveChangesComponentStyles.css"

export default class SaveChangesComponent extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        return(
            <button id = "saveChangesBtn">
                <div id = "saveChangesBtnIcon"></div>    
                <div id = "saveChangesBtnText">Save</div>
            </button>
        )
    }
}