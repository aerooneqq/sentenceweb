import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import HeaderTitle from './HeaderTitle';

describe("Header title", () => { 
    it("should render correctly", () => { 
        const headerTitle = shallow(<HeaderTitle />);

        expect(shallowToJson(headerTitle)).toMatchSnapshot();
    });

    it("should have 'Sentence' heading", () => { 
        const headerTitle = shallow(<HeaderTitle />);

        expect(headerTitle.find("div").at(0).text()).toBe("Sentence");
    });
});