import React from 'react'
import { shallow, render } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import SignOut from "../SignOut";

describe("SignOut component", () => { 
    it("should render correctly", () => { 
        const signOut = shallow(<SignOut />);

        expect(shallowToJson(signOut)).toMatchSnapshot();
    });

    it("should call signOut from props when button clicked", () => {
        const props = { 
            signOut: () => { }
        }

        const spy = jest.spyOn(props, "signOut").mockImplementation(() => {});

        const signOut = shallow(<SignOut {...props} />);
        signOut.find("div.toolTipContainer").find("button").simulate("click");
        expect(spy).toBeCalled();
    });

    it("should work correctly when props are undefined", () => { 
        const props = { 
            signOut: undefined
        }

        const signOut = shallow(<SignOut {...props} />);
        signOut.find("div.toolTipContainer").find("button").simulate("click");
    });

    it("should work correctly when props are null", () => { 
        const props = { 
            signOut: null
        }

        const signOut = shallow(<SignOut {...props}/>);
        signOut.find("div.toolTipContainer").find("button").simulate("click");
    });
});