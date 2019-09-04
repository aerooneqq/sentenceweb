import React, {Component, lazy, Suspense} from "react";

//Styles
import "./UserActivityStyles.css";

//Services
import UserActivitiesService from "../../../../../../../services/UserServices/UserActivitiesService";

//App messages
import {alertAppMessage} from "../../../../../../ApplicationMessage/ApplicationMessageManager";
import UserActivityModel from "./UserActivityModel";

//Components
const Loader = lazy(()=>import("../../../../../../loader/Loader"));

export default class UserActivity extends Component{

    constructor(props){ 
        super(props)

        this.state = { 
            components: <Loader message = "Loading activities..." />,
            width: 500
        };
    }

    componentDidMount(){ 
        this.setState({ 
            components: <Loader message = "Loading activities" />
        });

        new UserActivitiesService().getUserActivities(localStorage.getItem("token"))
            .then(res => 
            { 
                let monthActivities = new UserActivityModel(res.data).getActitivtyComponents();

                this.setState({ 
                    components: monthActivities,
                    width: document.getElementById("userActivityOutterContainer").offsetWidth - 100
                });
            }).catch(er => { 
                if (er.reponse) { 
                    alertAppMessage(er.response.data, "error");
                }
                else { 
                    alertAppMessage("Error occured while getting your activities", "error");
                }
            });
    }

    render(){ 
        return(
            <div id = "userActivityOutterContainer">
                <div id = "userActivitiesCont" 
                     className = "profileShadowContainer">
                    <Suspense fallback = {<Loader message = "Loading activities..." />}>
                        {this.state.components}
                    </Suspense>
                </div>
            </div>
        )
    }
}