import React from 'react'
import { shallow, render } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import UserPhoto from "../UserPhoto";

import Loader from "../../../../../../../loader/Loader";
import UserPhotoLoader from "../UserPhotoLoader/UserPhotoLoader";
import ProfileDataItem from "../ProfileDataItem/ProfileDataItem";
import SignOutComponent from "../SignOut/SignOut";
import DeleteAccountComponent from "../DeleteAccount/DeleteAccount";
import AccountVerification from "../AccountVerification/AccountVerification";

describe("UserPhoto", () => { 
    it("should render corectly", () => { 
        const userPhoto = shallow(<UserPhoto />);

        expect(shallowToJson(userPhoto)).toMatchSnapshot();
    });

    it("should have proper initial state", () => { 
        const userPhoto = shallow(<UserPhoto />);

        const rightState = { 
            isPhotoUpdating: true,
            isFirstLoad: true,
            userPhoto: null
        }

        for (let key in rightState) { 
            expect(userPhoto.state(key)).toBe(rightState[key]);
        }
    });

    it("should have UserPhotoLoader when intial render", () => { 
        const userPhoto = shallow(<UserPhoto />);

        expect(userPhoto.find(UserPhotoLoader).exists()).toBe(true);
        expect(userPhoto.find(AccountVerification).exists()).toBe(true);
    });

    it("should have all utility components when loaded", () => { 
        const userPhoto = shallow(<UserPhoto />);

        userPhoto.setState({
            isFirstLoad: false,
            isPhotoUpdating: false
        });

        expect(userPhoto.find(SignOutComponent).exists()).toBe(true);
        expect(userPhoto.find(AccountVerification).exists()).toBe(true);
        expect(userPhoto.find(DeleteAccountComponent).exists()).toBe(true);
    });
});