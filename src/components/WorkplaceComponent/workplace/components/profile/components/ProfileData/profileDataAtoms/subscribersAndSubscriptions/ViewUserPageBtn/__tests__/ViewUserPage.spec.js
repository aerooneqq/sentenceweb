import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import ViewUserPageBtn from "../ViewUserPageBtn";

const propsSpy = jest.fn(() => {});
const props = { 
    userID: 1,
    viewUserPage: propsSpy
}

describe("ViewUserPageBtn", () => { 
    it("should render correctly", () => {
        expect(shallowToJson(shallow(<ViewUserPageBtn {...props}/>))).toMatchSnapshot();
    });

    it("should call viewUserPage from props when handleBtnClick is clicked", () => { 
        const viewUserPage = shallow(<ViewUserPageBtn {...props}/>);

        viewUserPage.instance().handleBtnClick();

        expect(propsSpy).toBeCalled();
    });

    it("should call handleBtnClick when clicked", () => { 
        const spy = jest.spyOn(ViewUserPageBtn.prototype, "handleBtnClick");
        const viewUserPage = shallow(<ViewUserPageBtn {...props}/>); 

        viewUserPage.find("button").simulate("click");

        expect(spy).toBeCalled();
    });
});