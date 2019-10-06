import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import VerticalSeparator from './VerticalSeparator';

describe("Vertical separator", () => { 
    it("should render correctly", () => { 
        const verticalSeparator = shallow(<VerticalSeparator />);

        expect(shallowToJson(verticalSeparator)).toMatchSnapshot();
    });

    it("should have headerVertSeparator class", () => { 
        const verticalSeparator = shallow(<VerticalSeparator />);

        expect(verticalSeparator.find("div").at(0).hasClass("headerVertSeparator")).toBe(true);
    });
});