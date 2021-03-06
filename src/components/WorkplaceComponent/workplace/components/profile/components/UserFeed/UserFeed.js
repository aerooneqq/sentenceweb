import React, {Component} from "react"

//Styles
import "./UserFeedStyles.css"

//Services
import UserFeedService from "../../../../../../../services/UserServices/UserFeedService";
import ProfileHeader from "../ProfileHeader/ProfileHeader";

//App messages
import {alertAppMessage} from "../../../../../../ApplicationMessage/ApplicationMessageManager";

import UserAtomFeed from "./UserAtomFeed/UserAtomFeed";
import UserFeedLoader from "./UserFeedLoader/UserFeedLoader";
import Loader from "../../../../../../loader/Loader";

export default class UserFeed extends Component { 

    constructor(props) { 
        super(props)

        this.state = { 
            isFirstLoad: true,
            component: <Loader message = "Loading feed..." />,
            textAreaValue: ""
        };

        this.userFeedService = new UserFeedService(localStorage.getItem("token"));

        this.insertNewPost = this.insertNewPost.bind(this);
        this.onTextAreaValueChange = this.onTextAreaValueChange.bind(this);
        this.uploadUserFeed = this.uploadUserFeed.bind(this);
        this.onTextAreaKeyDown = this.onTextAreaKeyDown.bind(this);
    }

    componentDidMount() { 
        this.uploadUserFeed();
    }

    /**
     * Deletes all repeated entries of elements
     * @param {Array of numbers} array 
     */
    _clearArray(array) { 
        if (!array) { 
            return [];
        }

        var seen = {};
        var out = [];
        var len = array.length;
        var j = 0;

        for(var i = 0; i < len; i++) {
             var item = array[i];
             if(seen[item] !== 1) {
                   seen[item] = 1;
                   out[j++] = item;
             }
        }

        return out
    }

    uploadUserFeed() { 
        this.userFeedService.getUserFeed(localStorage.getItem("token"))
            .then(res => { 
                let userFeedDto = res.data;
                let atomFeeds = userFeedDto.usersFeed.map(f => {
                    return  (
                        <UserAtomFeed date = {f.publicationDate}
                                      message = {f.message}
                                      photo = {userFeedDto.userPhotoes[f.userID]}
                                      authorName = {f.name + " " + f.surname}/>
                    );
                });

                atomFeeds.reverse();

                this.setState({
                    component: atomFeeds,
                    textAreaValue: "",
                    isFirstLoad: false
                }); 
            }).catch(er => {
                if (er.response) { 
                    alertAppMessage(er.response.data, "error");
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
                    alertAppMessage(er.response.data, "error");
                }
                else { 
                    alertAppMessage("The error occured while inserting your message", "error");
                }

                this.uploadUserFeed();
            });

    }

    onTextAreaValueChange(event) { 
        this.setState({ 
            textAreaValue: event.target.value
        });
    }

    onTextAreaKeyDown(event) { 
        if (event.keyCode === 13) { 
            this.insertNewPost();
        }
    }

    render() { 
        return(
            <div id = "userFeedContainer">
                <ProfileHeader header = "Feed" /> 
                <div id = "userFeedInnerCont">
                        <div>
                            <div id = "userFeedInnerScroll">
                                {this.state.isFirstLoad === true ? <UserFeedLoader /> : this.state.component}
                            </div>
                            <div id = "userFeedInputCont">
                                <textarea placeholder="Whats up? Type it here..."
                                        id = "userFeedTextArea"
                                        value = {this.state.textAreaValue}
                                        onChange = {this.onTextAreaValueChange}
                                        onKeyDown = {this.onTextAreaKeyDown}/>
                                <button id = "sendFeedBtn" onClick = {this.insertNewPost}>
                                    Send
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}