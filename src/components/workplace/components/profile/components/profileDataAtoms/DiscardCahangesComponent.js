import React, {Component} from "react"

import "./styles/DiscardChangesCompStyles.css"

export default class DiscardChangesComponent extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        return(
            <div id = "discardChangesCont">
                Discard changes
            </div>
        )
    }
}