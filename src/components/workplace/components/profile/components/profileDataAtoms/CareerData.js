import React, {Component, lazy} from "react"

const ProfileTextBox = lazy(() => import("./ProfileTextBox"))


export default class CareerData extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        return(
            <div className="fadeInAnimation">
                <div className="textBlock">          
                    <ProfileTextBox />
                </div>
                <div className="textBlock">          
                    <ProfileTextBox />
                </div>
                <div className="textBlock">          
                    <ProfileTextBox />
                </div>
            </div>
        )
    }
}