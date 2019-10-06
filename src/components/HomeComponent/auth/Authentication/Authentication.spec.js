import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import Authentication from './Authentication';


describe("Authentiation top bar", () => { 
    it("should render correctly", () => { 
        const props = { 
            signIn: () => {}
        }

        const authentication = shallow(<Authentication {...props} />);

        expect(shallowToJson(authentication)).toMatchSnapshot();
    });  

    it("should change state", () => { 
        const props = { 
            signIn: () => {}
        }

        const authentication = shallow(<Authentication {...props}/>);

        authentication.instance().changeSignMode();
        expect(authentication.state().mode).toBe("signUp");
    });
});