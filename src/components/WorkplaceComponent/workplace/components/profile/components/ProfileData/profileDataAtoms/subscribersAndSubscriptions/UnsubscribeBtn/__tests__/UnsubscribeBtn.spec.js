import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import UnsubscribeBtn from "../UnsubscribeBtn";

const propsSpy = jest.fn(() => {});
const props = { 
    userID: 1,
    deleteSubscription: propsSpy
}

describe("UnsubscribeBtn", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<UnsubscribeBtn />))).toMatchSnapshot();
    });

    it("should call deleteSubscriptions from props", () => { 
        const unsubscribeBtn = shallow(<UnsubscribeBtn {...props}/>);

        unsubscribeBtn.find("button").simulate("click");

        expect(propsSpy).toBeCalled();
    });

    it("should call handleBtnClick when clicked", () => { 
        const spy = jest.spyOn(UnsubscribeBtn.prototype, "handleBtnClick").mockImplementation(() => {});
        const unsubscribeBtn = shallow(<UnsubscribeBtn {...props}/>);

        unsubscribeBtn.find("button").simulate("click");

        expect(spy).toBeCalled();
    });
}); 