import React from "react"; 
import {shallow} from "enzyme"; 
import {shallowToJson} from "enzyme-to-json";
import DeleteSubBtn from "../DeleteSubBtn";

const spy = jest.fn((x) => {});
const props = { 
    deleteSubscriber: spy
}

describe("DeleteSubBtn", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<DeleteSubBtn />))).toMatchSnapshot();
    });

    it("should call deleteSubscriber from props when clicked", () => { 
        const deleteSubBtn = shallow(<DeleteSubBtn {...props} />);

        deleteSubBtn.find("button.deleteSubBtn").simulate("click");

        expect(spy).toBeCalled();
    });
});