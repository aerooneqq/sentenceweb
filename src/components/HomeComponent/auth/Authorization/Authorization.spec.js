import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import Authorization from './Authorization';

describe("Authorization", () => { 
    it("must render correctly", () => { 
        const props = { 
            signIn: () => {}
        }

        const authorization = shallow(<Authorization {...props}/>);

        expect(shallowToJson(authorization)).toMatchSnapshot()
    });

    it("must have right text", () => { 
        const props = { 
            signIn: () => {}
        }

        const authorization = shallow(<Authorization {...props}/>);

        expect(authorization.find("p.inputNameText").at(0).text()).toBe("E-mail");
        expect(authorization.find("p.inputNameText").at(1).text()).toBe("Password");
        expect(authorization.find("p").at(2).text()).toBe("Forgot your password?");
        expect(authorization.find("button").text()).toBe("Sign in");
    });

    it("must call sign in method when sign in btn clicked", () => {
        let isSignInCalled = false; 
        const props = { 
            signIn: (email, pass) => { 
                return new Promise((onResolved, onRejected) => {
                    isSignInCalled = true;
                });
            }
        }

        const authorization = shallow(<Authorization {...props} />);

        authorization.find("button").simulate("click");
        expect(isSignInCalled).toBe(true);
    });

    it("must show loader when is loading", () => { 
        const authorization = shallow(<Authorization />);

        authorization.setState({ 
            isAuthorizing: true
        });

        expect(authorization.find("div").at(0).hasClass("authorizationLoaderCont")).toBe(true)
    })
});