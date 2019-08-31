import React, {Component, lazy, Suspense} from "react"

//Styles
import "./UserFeedStyles.css"

//Services
import UserFeedService from "../../../../../../../services/UserServices/UserFeedService";
import ProfileHeader from "../ProfileHeader/ProfileHeader";

//App messages
import {alertAppMessage} from "../../../../../../ApplicationMessage/ApplicationMessageManager";

//Components
const UserAtomFeed = lazy(()=>import("./UserAtomFeed/UserAtomFeed"));
const Loader = lazy(() => import("../../../../../../loader/Loader"));

export default class UserFeed extends Component { 
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
            }).catch(er => {
                alertAppMessage("Error occured while getting your feed", "error");
            });
    }

    render() { 
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