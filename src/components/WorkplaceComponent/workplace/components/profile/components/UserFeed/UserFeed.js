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
            component: <Loader message = "Loading feed..." />,
            textAreaValue: ""
        };

        this.userFeedService = new UserFeedService(localStorage.getItem("token"));

        this.insertNewPost = this.insertNewPost.bind(this);
        this.onTextAreaValueChange = this.onTextAreaValueChange.bind(this);
        this.uploadUserFeed = this.uploadUserFeed.bind(this);

        this.uploadUserFeed();
    }

    uploadUserFeed() { 
        this.userFeedService.getUserFeed(localStorage.getItem("token"))
            .then(res => { 
                let atomFeeds = res.data.map(f => { 
                    return  (
                        <UserAtomFeed date = {f.publicationDate}
                                      message = {f.message} />
                    );
                });

                atomFeeds.reverse();

                this.setState({
                    component: atomFeeds,
                    textAreaValue: ""
                }); 
            }).catch(er => {
                if (er.response) { 
                    alertAppMessage(er.reponse.data, "error");
                }
                else { 
                    alertAppMessage("Error occured while getting your feed", "error");
                }
            });
    }

    insertNewPost() { 
        this.setState({ 
            component: <Loader message = "Inserting your message" />
        });

        let message = this.state.textAreaValue;

        this.userFeedService.insertUserPost(message).then(() => { 
                alertAppMessage("The message was posted!", "success");
                this.uploadUserFeed();
            }).catch(er => { 
                if (er.response) { 
                    alertAppMessage(er.reponse.data, "error");
                }
                else { 
                    alertAppMessage("The error occured while inserting your message", "error");
                }
            });

    }

    onTextAreaValueChange(event) { 
        this.setState({ 
            textAreaValue: event.target.value
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
                            <textarea placeholder="Whats up? Type it here..."
                                      id = "userFeedTextArea"
                                      value = {this.state.textAreaValue}
                                      onChange = {this.onTextAreaValueChange}/>
                            <button id = "sendFeedBtn" onClick = {this.insertNewPost}>
                                Send
                            </button>
                        </div>
                    </Suspense>
                </div>
            </div>
        )
    }
}