import React, {Component} from "react";

import "./UserFeedPhotoStyles.css";

//Services
import UserService from "../../../../../../../../services/UserServices/UserService";
import ResponseService from "../../../../../../../../services/ResponseService/ReponseService";
import ImageService from "../../../../../../../../services/ImageService/ImageService";

export default class UserFeedPhoto extends Component { 
    constructor(props) { 
        super(props);

        this.userService = new UserService(localStorage.getItem("token"));
        this.responseService = new ResponseService();

        this.state = {
            isLoading: false,
            userPhoto: null
        }

        this.getUserPhoto = this.getUserPhoto.bind(this);
    }

    getUserPhoto() { 
        return `data:image/png;base64, ${this.props.photo}`;
    }

    render() { 
        return ( 
            this.state.isLoading === true ? null :
                <img src = {this.getUserPhoto()} className = "singleUserFeedPhoto" alt = "avatar"/>
        )
    }
}