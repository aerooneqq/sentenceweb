import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import AuthenticationTopBar from './AuthenticationTopBar';

describe("Authentication top bar", () => { 
     it("should render correctly", () => { 
        const props = { 
            mode: "signIn"
        }

        const authenticationTopBar = shallow(<AuthenticationTopBar {...props}/>);

        expect(shallowToJson(authenticationTopBar)).toMatchSnapshot();
     });

     it("should be in sign in mode when mode is sign in", () => { 
        const props = { 
            mode: "signIn"
        }

        const authenticationTopBar = shallow(<AuthenticationTopBar {...props} />)

        expect(authenticationTopBar.find("#authSlider").hasClass("movingLeftSlider")).toBe(true);
        expect(authenticationTopBar.find("#authSlider").text()).toBe("Sign in");
     });

     it("should be in sign up mode when the mode is sign up", () => { 
        const props = { 
            mode: "signUp"
        }

        const authenticationTopBar = shallow(<AuthenticationTopBar {...props} />);

        expect(authenticationTopBar.find("#authSlider").hasClass("movingRightSlider")).toBe(true);
        expect(authenticationTopBar.find("#authSlider").text()).toBe("Sign up");
     });
});