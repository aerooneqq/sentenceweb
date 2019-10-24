import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import ProfileDataLoader from "../ProfileDataLoader";
import ProfileDataAtomLoader from "../ProfileDataAtomLoader";

describe("ProfileDataLoader", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<ProfileDataLoader />))).toMatchSnapshot();
    });

    it("should have 3 Profile data atom loaders", () => { 
        expect(shallow(<ProfileDataLoader />).find(ProfileDataAtomLoader).length).toBe(3);
    });
});