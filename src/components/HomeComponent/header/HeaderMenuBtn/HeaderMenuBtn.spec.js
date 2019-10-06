import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import HeaderMenuBtn from './HeaderMenuBtn';

describe("Header menu btn", () => { 
    it("should render correctly", () => { 
        const headerMenuBtn = shallow(<HeaderMenuBtn />);

        expect(shallowToJson(headerMenuBtn)).toMatchSnapshot();
    });
});