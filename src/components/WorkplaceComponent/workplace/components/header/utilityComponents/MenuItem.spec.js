import React from 'react'
import { shallow, render } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import MenuItem from "./MenuItem";

describe("MenuItem", () => { 
    it("should render correctly", () => { 
        const props = {
            menuItem: { 
                name: "Name", 
                ID: 1
            }
        }

        const menuItem = render(<MenuItem {...props} />);

        expect(menuItem).toMatchSnapshot();
    });

    it("should display right name", () => {
        const props = { 
            menuItem: { 
                name: "Nameweqweqwewq", 
                ID: 1234
            }
        }

        const menuItem = shallow(<MenuItem {...props}/>);

        expect(menuItem.find("div.workplaceHeaderMenuItem").text()).toBe(props.menuItem.name);
    });

    it("should call the changeWorkplaceComponent function when clicked", () => { 
        let wasChangeFuncCalled = false;
        const props = { 
            changeWorkplaceComponent: () => { 
                wasChangeFuncCalled = true;
            },
            menuItem: { 
                name: "testname",
                ID: 324
            }
        }

        const menuItem = shallow(<MenuItem {...props} />);
        menuItem.find("div.workplaceHeaderMenuItem").simulate("click");

        expect(wasChangeFuncCalled).toBe(true);
        expect(menuItem.find("div.workplaceHeaderMenuItem").text()).toBe(props.menuItem.name);
    });

    //The point of this test is to make sure that the component will not crash if
    //all props are undefined.
    it("should not crash when the props are undefined or null", () => {
        const props = { }

        const menuItem = shallow(<MenuItem {...props} />);

        menuItem.find("div.workplaceHeaderMenuItem").simulate("click");
        expect(menuItem.find("div.workplaceHeaderMenuItem").text()).toBe("");
    });
});