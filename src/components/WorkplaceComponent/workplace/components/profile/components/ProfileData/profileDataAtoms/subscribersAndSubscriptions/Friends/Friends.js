import React, {Component, lazy} from "react";

//Styles
import "./FriendsStyles.css";
import Loader from "../../../../../../../../../loader/Loader";

//Services
import UserFriendsService from "../../../../../../../../../../services/userServices/UserFriendsService";
import UserService from "../../../../../../../../../../services/userServices/UserService";

//Components
const SubHeader = lazy(() => import("../SubHeader/SubHeader"));
const WorkplaceSearch = lazy(() => import("../../../../../../search/WorkplaceSearch"));
const Subscriber = lazy(() => import("../Subscriber/Subscriber"));
const Subscription = lazy(() => import("../Subscription/Subscription"));
const UserSearchResult = lazy(() => import("../UserSearchResult/UserSearchResult"));

export default class Friends extends Component{ 
    constructor(props){ 
        super(props);

        this.state = { 
            elements: [],
        };

        this.changeUserFriendMode = this.changeUserFriendMode.bind(this);
        this.deleteSubscriber = this.deleteSubscriber.bind(this);
        this.deleteSubscription = this.deleteSubscription.bind(this);
        this.uploadSubscribers = this.uploadSubscribers.bind(this);
        this.uploadSubscriptions = this.uploadSubscriptions.bind(this);
        this.searchForUsers = this.searchForUsers.bind(this);
        this.changeUserFriendMode = this.changeUserFriendMode.bind(this);
    }
    
    changeUserFriendMode(mode) { 
        if (mode === "subscribers"){ 
            this.uploadSubscribers();
        }
        else if (mode === "subscriptions"){ 
            this.uploadSubscriptions();
        }
    }

    deleteSubscriber(userID){
        let userFriendsService = new UserFriendsService();
        userFriendsService.deleteSubscriber(localStorage.getItem("token"), userID)
            .then(() => { 
                this.uploadSubscribers();
            }).catch(er => alert(er))
    }

    deleteSubscription(userID){ 
        let userFriendsService = new UserFriendsService();
        userFriendsService.deleteSubscription(localStorage.getItem("token"), userID)
            .then(() => { 
                this.uploadSubscriptions();
            }).catch(er => alert(er))
    }

    subscribe(userID){ 
        let userFriendsService = new UserFriendsService();
        userFriendsService.addSubscription(localStorage.getItem("token"), userID)
            .then(() => { 
                alert("Added sub")
            }).catch(er => { 
                alert(er);
            })
    }

    uploadSubscribers() { 
        this.setState({ 
            elements: <Loader  message = "Loading subscribers..."/>
        });

        let userFriendsService = new UserFriendsService();
        userFriendsService.getSubsribers(localStorage.getItem("token"))
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
            }).catch(er => { 
                alert(er);
            });
    }

    uploadSubscriptions() { 
        this.setState({ 
            elements: <Loader message = "Loading subscriptions..." />
        });

        let userFriendsService = new UserFriendsService();
        userFriendsService.getSubscriptions(localStorage.getItem("token"))
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
            }).catch(er => alert(er));
    }

    searchForUsers(login){ 
        this.setState({ 
            elements: <Loader message = "Searching for users..." />
        })

        let userService = new UserService();
        userService.searchForUsers(localStorage.getItem("token"), login)
            .then(res => { 
                let data = res.data;

                alert(data.length)
                let components = data.map(user => { 
                    return (
                        <UserSearchResult searchResult = {user} 
                                          subscribe = {this.subscribe}/>
                    )
                });

                this.setState({ 
                    elements: components
                })
            }).catch(er => alert(er));
    }

    render(){
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