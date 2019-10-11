import React from 'react'
import { shallow, render } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import ProfileDataItem from "../ProfileDataItem";

describe("Profile data item", () => { 
    it("should render correctly", () => { 
        const profileDataItem = shallow(<ProfileDataItem />); 

        expect(shallowToJson(profileDataItem)).toMatchSnapshot();
    });
});