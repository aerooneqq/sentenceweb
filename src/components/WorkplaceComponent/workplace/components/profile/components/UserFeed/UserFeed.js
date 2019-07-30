import React, {Component, lazy, Suspense} from "react"

//Styles
import "./UserFeedStyles.css"

//Services
import UserFeedService from "../../../../../../../services/userServices/UserFeedService";
import ProfileHeader from "../ProfileHeader/ProfileHeader";

//Components
const UserAtomFeed = lazy(()=>import("./UserAtomFeed/UserAtomFeed"))
const Loader = lazy(() => import("../../../../../../loader/Loader"))
const Error = lazy(() => import("../../../../../../errorComponent/Error"))

export default class UserFeed extends Component{ 
    constructor(props) { 
        super(props)

        this.state = { 
            component: <Loader message = "Loading feed..." />
        }

        let userFeedService = new UserFeedService();
        userFeedService.getUserFeed(localStorage.getItem("token"))
            .then(res => { 
                let atomFeeds = res.data.map(f => { 
                    return  (
                        <UserAtomFeed date = {f.publicationDate}
                                      message = {f.message} />
                    );
                });

                this.setState({
                    component: atomFeeds
                });
            }).catch(er =>{ 
                this.setState({ 
                    component: <Error message = {er} /> 
                });
            });
    }

    render(){ 
        return(
            <div id = "userFeedContainer">
                <ProfileHeader header = "Feed" /> 
                <div id = "userFeedInnerCont">
                    <Suspense fallback={<Loader />}>
                        <div id = "userFeedInnerScroll">
                            {this.state.component}
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