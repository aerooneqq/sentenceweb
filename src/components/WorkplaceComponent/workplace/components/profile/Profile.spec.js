import React from 'react'
import { shallow, render } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import Profile from "./Profile";
import ProfileData from "./components/ProfileData/ProfileData";
import UserPhoto from "./components/UserPhoto/UserPhoto";
import UserActivityComponent from "./components/UserActivity/UserActivity";
import UserFeed from "./components/UserFeed/UserFeed";

describe("Profile", () => { 
    it("should render correctly", () => { 
        const props = { 
            signOut: () => {}
        }

        const profile = shallow(<Profile {...props}/>);

        expect(shallowToJson(profile)).toMatchSnapshot();
    });

    it("should change the currentUserDataIndex", () => { 
        const profile = shallow(<Profile />);

        expect(profile.state("currentUserDataIndex")).toBe(2);
        
        profile.instance().changeCurrentUserData(4);

        expect(profile.state("currentUserDataIndex")).toBe(4);
    });

    it("should have profile mini components", () => { 
        const profile = shallow(<Profile />);

        expect(profile.find(UserPhoto).exists()).toBe(true);
        expect(profile.find(ProfileData).exists()).toBe(true);
        expect(profile.find(UserActivityComponent).exists()).toBe(true);
        expect(profile.find(UserFeed).exists()).toBe(true);
    }); 
});