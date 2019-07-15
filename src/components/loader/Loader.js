import React, {Component} from "react"
import "./LoaderStyles.css"

export default class Loader extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        return(
            <div class = "loaderCont">
                <div class = "ring"> 
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}