import React from "react";
import {shallow} from "enzyme"; 
import {shallowToJson} from "enzyme-to-json";
import SaveChanges from "../SaveChanges";

const spy = jest.fn(() => {});
const props = { 
    saveChanges: spy
}

describe("SaveChanges", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<SaveChanges />))).toMatchSnapshot();
    });

    it("should call saveChanges when clicked", () => { 
        const saveChanges = shallow(<SaveChanges {...props} />);

        saveChanges.find("button").simulate("click");

        expect(spy).toBeCalled();
    });
});