import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import HeaderMenuBtn from './HeaderMenuBtn';

describe("Header menu btn", () => { 
    it("should render correctly", () => { 
        const headerMenuBtn = shallow(<HeaderMenuBtn />);

        expect(shallowToJson(headerMenuBtn)).toMatchSnapshot();
    });

    it("should change 'closed' status when clicked", () => { 
        const props = { 
            showOrHideMenuItems: () => {}
        }

        const headerMenuBtn = shallow(<HeaderMenuBtn {...props} />);

        expect(headerMenuBtn.instance().closed).toBe(true);

        headerMenuBtn.instance()._changeStateWhenClicked();

        expect(headerMenuBtn.instance().closed).toBe(false);

        headerMenuBtn.instance()._changeStateWhenClicked();

        expect(headerMenuBtn.instance().closed).toBe(true);
    });

    it("should call 'showOrHideMenuItems' method when _changeStateWhenClicked is called", () => { 
        let wasMethodCalled = false; 

        const props = { 
            showOrHideMenuItems: () => { 
                wasMethodCalled = true;
            }
        }

        const headerMenuBtn = shallow(<HeaderMenuBtn {...props}/>);
        
        headerMenuBtn.instance()._changeStateWhenClicked();
        expect(wasMethodCalled).toBe(true);
    });
});