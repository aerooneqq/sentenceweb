import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import SubscribeBtn from "../SubscribeBtn";

const propsSpy = jest.fn((x) => {});
const props = { 
    userID: 1,
    subscribe: propsSpy
}

describe("SubscribeBtn", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<SubscribeBtn />))).toMatchSnapshot();
    });

    it("should call subscribe from props when handleBtnClick is called", () => { 
        const subscribeBtn = shallow(<SubscribeBtn {...props} />);
        subscribeBtn.instance().handleBtnClick();


        expect(propsSpy).toBeCalled();
    });
    
    it("should call handleBtnClick when clicked", () => { 
        const spy = jest.spyOn(SubscribeBtn.prototype, "handleBtnClick").mockImplementation(() => {});
        const subscribeBtn = shallow(<SubscribeBtn />);

        subscribeBtn.find("button").simulate("click");

        expect(spy).toBeCalled();
    });
});