import React, {Component, lazy} from "react";

//Styles
import "./styles/FriendsStyles.css";
import Loader from "../../../../../../loader/Loader";

//Services
import UserFriendsService from "../../../../../../../services/userFriends/UserFriendsService";

//Components
const SubHeader = lazy(() => import("./SubHeader"));
const FriendsSearch = lazy(() => import("./FriendsSearch"));
const Subscriber = lazy(() => import("./Subscriber"));
const Subscription = lazy(() => import("./Subscription"));

export default class Friends extends Component{ 
    constructor(props){ 
        super(props);

        this.state = { 
            elements: [],
            isUpdating: false
        };

        this.changeUserFriendMode = this.changeUserFriendMode.bind(this);
        this.uploadSubscribers = this.uploadSubscribers.bind(this);
        this.uploadSubscriptions = this.uploadSubscriptions.bind(this);
    }
    
    changeUserFriendMode(mode) { 
        if (mode === "subscribers"){ 
            this.uploadSubscribers();
        }
        else if (mode === "subscriptions"){ 
            this.uploadSubscriptions();
        }
    }

    uploadSubscribers() { 
        this.setState({ 
            isUpdating: true
        });

        let userService = new UserFriendsService();
        userService.getSubsribers(localStorage.getItem("token"))
            .then(res => { 
                let data = res.data;
                let components = [];

                for (let i = 0; i < data.length; i++){ 
                    components.push(<Subscriber subscriber = {data[i]} />);
                }

                this.setState((state) => {
                    return { 
                        elements: components,
                        isUpdating: false
                    } 
                });
            }).catch(er => { 
                alert(er);
            });
    }

    uploadSubscriptions() { 
        this.setState({ 
            isUpdating: true
        });

        let userFriendsService = new UserFriendsService();
        userFriendsService.getSubscriptions(localStorage.getItem("token"))
            .then(res => { 
                let data = res.data;
                let components = []; 

                for (let i = 0; i < data.length; i++){ 
                    components.push(<Subscription subscription = {data[i]} />)
                }

                this.setState({ 
                    elements: components,
                    isUpdating: false 
                });
            }).catch(er => alert(er));
    }

    render(){
        return (
            <div id = "friendsContainer">
                <SubHeader changeUserFriendMode = {this.changeUserFriendMode}/>
                <FriendsSearch />
                {this.state.isUpdating === false ? (
                    <div id = "friendsScrollViewer">
                        {this.state.elements}
                    </div>) : <Loader message = "Loading subs..."/>}
            </div>
        )
    }
}