import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import ProfileData from "../ProfileData";

const props = { 
    user: {},
    currentUserDataIndex: -1
}

describe("ProfileData", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<ProfileData {...props}/>))).toMatchSnapshot();
    });

    it("should have proper initial state", () => { 
        const profileData = shallow(<ProfileData {...props}/>);

        const properState = { 
            isFirstLoad: true,
            isUpdating: true,
            userFriendsMode: "subscribers"
        }

        for (let key in properState) { 
            expect(properState[key]).toBe(profileData.state(key));
        }
    });

    it("should change updating status when setUpdatingStatus is called", () => { 
        const profileData = shallow(<ProfileData {...props}/>);
        expect(profileData.state("isUpdating")).toBe(true);

        profileData.instance().setUpdatingStatus(false);
        expect(profileData.state("isUpdating")).toBe(false);
    })

    it("should change the userFriendsMode when changeUserFriendMode is called", () => { 
        const profileData = shallow(<ProfileData {...props}/>);
        expect(profileData.state("userFriendsMode")).toBe("subscribers");

        profileData.instance().changeUserFriendMode("subscriptions");
        expect(profileData.state("userFriendsMode")).toBe("subscriptions");
    });
});