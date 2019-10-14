import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import SubHeader from "../SubHeader";

const propsSpy = jest.fn(() => {});
const props = { 
    changeUserFriendsMode: propsSpy
}


describe("SubHeader", () => { 
    it("should render correctly", () => {
        expect(shallowToJson(shallow(<SubHeader />))).toMatchSnapshot();
    });

    it("should call changeFriendModeToSubscribers when clicked Subscribers are clicked", () => { 
        const spy = jest.spyOn(SubHeader.prototype, "changeFriendModeToSubscribers").mockImplementation(() => {});
        const subHeader = shallow(<SubHeader />);

        subHeader.find("div#subHeader").find("div#subscribers").simulate("click");
        expect(spy).toBeCalled();
    });

    it("should call changeFriendModeToSubscriptions method when Subscriptions are clicked", () => { 
        const spy = jest.spyOn(SubHeader.prototype, "changeFriendModeToSubscriptions").mockImplementation(() => {});
        const subHeader = shallow(<SubHeader />);

        subHeader.find("div#subHeader").find("div#subscriptions").simulate("click");
        expect(spy).toBeCalled();
    });

    it("should call changeUserFriendMode when changeFrinedsState is called", () => { 
        const subHeader = shallow(<SubHeader {...props}/>);

        subHeader.instance().changeFriendsMode("");

        expect(propsSpy).toBeCalled();
    });
});