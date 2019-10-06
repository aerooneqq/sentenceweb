import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import HeaderMenuItem from './HeaderMenuItem';

describe("Header menu item", () => { 
    it("should render correctly", () => { 
        const props = { 
            menuItem: { 
                ID: 0,
                name: "name"
            }
        }
        const headerMenuItem = shallow(<HeaderMenuItem {...props}/>);

        expect(shallowToJson(headerMenuItem)).toMatchSnapshot();
    });

    it("should display right name", () => { 
        const props = {
            menuItem: { 
                ID: 1,
                name: "test name"
            }
        }

        const headerMenuItem = shallow(<HeaderMenuItem {...props} />);

        expect(headerMenuItem.find("div.headerMenuOptionText").text()).toBe(props.menuItem.name);
    });

    
});