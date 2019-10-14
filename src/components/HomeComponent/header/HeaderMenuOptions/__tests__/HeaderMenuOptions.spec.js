import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import HeaderMenuOptions from '../HeaderMenuOptions';

describe("Header menu options", () => { 
    it("should render correctly" , () => { 
        const headerMenuOptions = shallow(<HeaderMenuOptions />);

        expect(shallowToJson(headerMenuOptions)).toMatchSnapshot();
    });
});

