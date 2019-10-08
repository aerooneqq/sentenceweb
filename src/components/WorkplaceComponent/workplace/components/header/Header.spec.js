import React from 'react'
import { shallow, render } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import Header from "./Header";

describe("Header", () => { 
    it("should render correctly", () => { 
        const props = { 
            changeWorkplaceComponent: () => {}
        }

        const header = render(<Header />);

        expect(shallowToJson(header)).toMatchSnapshot();
    });
})
