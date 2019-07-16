import React, {Component, lazy, Suspense} from "react"
import "./styles/UserFeedStyles.css"

const UserAtomFeed = lazy(()=>import("./userFeedAtoms/UserAtomFeed"))
const UserFeedHeader = lazy(()=>import("./userFeedAtoms/UserFeedHeader"))
const Loader = lazy(() => import("../../../../loader/Loader"))

export default class UserFeed extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        return(
            <div id = "userFeedContainer"> 
                <UserFeedHeader />
                <div id = "userFeedInnerCont">
                    <Suspense fallback={<Loader />}>
                        <div id = "userFeedInnerScroll">
                            <UserAtomFeed />
                            <UserAtomFeed />
                            <UserAtomFeed />
                            <UserAtomFeed />
                        </div>
                        <div id = "userFeedInputCont">
                            <textarea placeholder="Whats up? Type it here..." id = "userFeedTextArea"/>
                            <button id = "sendFeedBtn">
                                Send
                            </button>
                        </div>
                    </Suspense>
                </div>
            </div>
        )
    }
}