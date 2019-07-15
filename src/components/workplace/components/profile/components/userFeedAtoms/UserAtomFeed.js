import React, {Component} from "react"
import "./styles/UserAtomFeed.css"

export default class UserAtomFeed extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        return( 
            <div className="userAtomFeedCont">
                <div className="userAtomFeedPhoto">

                </div>

                <div className="userFeedTextCont">
                    <div className="userAtomFeedText">
                        D Descr iptionesDes criptDes cription ion criDescrip t ionDe script ionpt DecriDe scrip sc ripcriDescrip tionion
                    </div>
                    <div className="userAtomFeedDate">
                        30.05.2000
                    </div>
                </div>
            </div>
        )
    }
}