import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json"; 
import UserActivityLoader from "../UserActivityLoader";
import UserActivityAtomLoader from "../UserActivityAtomLoader";

describe("UserActivityLoader", () => { 
    it("should render correctly", () => { 
        const userActivityLoader = shallow(<UserActivityLoader />);

        expect(shallowToJson(userActivityLoader)).toMatchSnapshot();
    });

    it("should have 12 UserActivityAtomLoaders", () => { 

        expect(shallow(<UserActivityLoader />).find(UserActivityAtomLoader).length).toBe(12);
    });
});