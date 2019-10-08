import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import WorkplaceComponent from './WorkplaceComponent';
import Profile from "./workplace/components/profile/Profile"

describe("workplace component", () => { 
    it("should render correctly", () => { 
        const props = { 
            signOut: () => {}
        }

        const workplaceComponent = shallow(<WorkplaceComponent />);
        
        expect(shallowToJson(workplaceComponent)).toMatchSnapshot();
    });
});