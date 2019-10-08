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

    it("should change state (hover to true) when mouse enters", () => { 
        const props = { 
            menuItem: { 
                ID: 1,
                name: "Test name"
            }
        }

        const headerMenuItem = shallow(<HeaderMenuItem {...props}/>);

        headerMenuItem.find("div.headerMenuOption").simulate("mouseEnter");

        expect(headerMenuItem.state("hovered")).toBe(true);
    });

    it("should change state (hovered to false) when mouse leaves", () => { 
        const props = { 
            menuItem: { 
                ID: 1,
                name: "Test name"
            }
        }
        const headerMenuItem = shallow(<HeaderMenuItem {...props}/>);

        headerMenuItem.find("div.headerMenuOption").simulate("moueseLeave");

        expect(headerMenuItem.state("hovered")).toBe(false);
    });

    it("should have correct ids", () => { 
        const props = { 
            menuItem: { 
                ID: 1231,
                name: "Test name"
            }
        }

        const headerMenuItem = shallow(<HeaderMenuItem {...props} />);

        expect(headerMenuItem.state("containerId")).toBe("headerMenuOption" + props.menuItem.ID);
        expect(headerMenuItem.state("textId")).toBe("headerMenuOptionText" + props.menuItem.ID);
    });
});