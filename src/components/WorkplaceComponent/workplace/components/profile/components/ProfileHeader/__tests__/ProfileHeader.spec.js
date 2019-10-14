import React from "react";
import {shallow} from "enzyme"; 
import {shallowToJson} from "enzyme-to-json";
import ProfileHeader from "../ProfileHeader";

describe("ProfileHeader", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<ProfileHeader />))).toMatchSnapshot();
    });

    it("should correctly display name of the header", () => { 
        const props = { 
            header: "test name",
        }

        const profileHeader = shallow(<ProfileHeader {...props} />);
        expect(profileHeader.find("div").text()).toBe(props.header);
    })
});