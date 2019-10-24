import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import DiscardChanges from "../DiscardCahanges";

const spy = jest.fn(() => {})
const props = { 
    discardChangesInProfileData: spy
}

describe("DiscardChanges", () => {
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<DiscardChanges />))).toMatchSnapshot();
    });

    it("should call the discardChangesInProfileData method from props when clicked", () => { 
        const discardChanges = shallow(<DiscardChanges {...props}/>);

        discardChanges.find("div").simulate("click");

        expect(spy).toBeCalled();
    });
});