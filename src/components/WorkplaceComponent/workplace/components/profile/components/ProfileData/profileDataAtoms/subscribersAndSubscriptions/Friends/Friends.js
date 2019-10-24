import React, {Component, lazy} from "react";

//Styles
import "./FriendsStyles.css";
import Loader from "../../../../../../../../../loader/Loader";

//Services
import UserFriendsService from "../../../../../../../../../../services/UserServices/UserFriendsService";
import UserService from "../../../../../../../../../../services/UserServices/UserService";
import { alertAppMessage } from "../../../../../../../../../ApplicationMessage/ApplicationMessageManager";

//Components
import SubHeader from "../SubHeader/SubHeader";
import WorkplaceSearch from "../../../../../../search/WorkplaceSearch";
import Subscriber from "../Subscriber/Subscriber";
import Subscription from "../Subscription/Subscription";
import UserSearchResult from "../UserSearchResult/UserSearchResult";

export default class Friends extends Component {

    constructor(props){ 
        super(props);

        this.state = { 
            elements: [],
        };

        this.userFriendsService = new UserFriendsService(localStorage.getItem("token"));
        this.userService = new UserService(localStorage.getItem("token"));

        this.changeUserFriendMode = this.changeUserFriendMode.bind(this);
        this.deleteSubscriber = this.deleteSubscriber.bind(this);
        this.deleteSubscription = this.deleteSubscription.bind(this);
        this.uploadSubscribers = this.uploadSubscribers.bind(this);
        this.uploadSubscriptions = this.uploadSubscriptions.bind(this);
        this.searchForUsers = this.searchForUsers.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }
    
    changeUserFriendMode(mode) { 
        if (mode === "subscribers"){ 
            this.uploadSubscribers();
        }
        else if (mode === "subscriptions"){ 
            this.uploadSubscriptions();
        }
    }

    deleteSubscriber(userID) {
        this.userFriendsService.deleteSubscriber(localStorage.getItem("token"), userID)
            .then(() => { 
                this.uploadSubscribers();
                alertAppMessage("The subscriber was deleted.", "success");
            }).catch(er =>{
                if (er.response) { 
                    alertAppMessage(er.response.data, "error");
                }
            })
    }

    deleteSubscription(userID) { 
        this.userFriendsService.deleteSubscription(userID)
            .then(() => { 
                this.uploadSubscriptions();
                alertAppMessage("The subscription was deleted.", "success");
            }).catch(er => { 
                if (er.response) { 
                    alertAppMessage(er.response.data, "error");
                }
            })
    }

    subscribe(userID) { 
        this.userFriendsService.addSubscription(userID)
            .then(() => { 
                alertAppMessage("Added subscriber", "success");
            }).catch(er => { 
                if (er.response) { 
                    alertAppMessage(er.response.data, "error");
                }
            })
    }

    uploadSubscribers() { 
        this.setState({ 
            elements: <Loader  message = "Loading subscribers..."/>
        });

        this.userFriendsService.getSubsribers()
            .then(res => { 
                let data = res.data;
                let components = [];

                for (let i = 0; i < data.length; i++){ 
                    components.push(<Subscriber subscriber = {data[i]}
                                                deleteSubscriber = {this.deleteSubscriber} />);
                }

                this.setState({
                    elements: components 
                });

                alertAppMessage("Subscribers were uploaded", "success");
            }).catch(er => { 
                if (er.response) { 
                    alertAppMessage(er.response.data, "error");
                }
            });
    }

    uploadSubscriptions() { 
        this.setState({ 
            elements: <Loader message = "Loading subscriptions..." />
        });

        this.userFriendsService.getSubscriptions()
            .then(res => { 
                let data = res.data;
                let components = []; 

                for (let i = 0; i < data.length; i++){ 
                    components.push(<Subscription subscription = {data[i]}
                                                  deleteSubscription = {this.deleteSubscription} />)
                }

                this.setState({ 
                    elements: components,
                });

                alertAppMessage("Subscriptions were uploaded", "success");
            }).catch(er => { 
                if (er.response) { 
                    alertAppMessage(er.response.data, "error");
                }
            });
    }

    searchForUsers(login) { 
        this.setState({ 
            elements: <Loader message = "Searching for users..." />
        })

        this.userService.searchForUsers(login)
            .then(res => { 
                let data = res.data;

                let components = data.map(user => { 
                    return (
                        <UserSearchResult searchResult = {user} 
                                          subscribe = {this.subscribe}/>
                    )
                });

                this.setState({ 
                    elements: components
                });

                alertAppMessage("Search results were uploaded", "success");
            }).catch(er => {
                if (er.response) { 
                    alertAppMessage(er.response.data, "error");
                }
            });
    }

    render() {
        return (
            <div id = "friendsContainer">
                <SubHeader changeUserFriendMode = {this.changeUserFriendMode} />
                <WorkplaceSearch search = {this.searchForUsers}/>
                <div id = "friendsScrollViewer">
                    {this.state.elements}
                </div>
            </div>
        )
    }
}