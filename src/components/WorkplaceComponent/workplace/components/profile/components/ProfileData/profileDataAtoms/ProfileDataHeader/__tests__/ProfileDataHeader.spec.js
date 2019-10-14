import React from "react";
import {shallow} from "enzyme"; 
import {shallowToJson} from "enzyme-to-json";
import ProfileDataHeader from "../ProfileDataHeader";

const props = { 
    dataName: "dataName"
}

describe("ProfileDataHeader", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<ProfileDataHeader />))).toMatchSnapshot();
    });

    it("should display right header", () => { 
        expect(shallow(<ProfileDataHeader {...props}/>).find("div#profileDataHeader").text()).toBe(props.dataName);
    })
});