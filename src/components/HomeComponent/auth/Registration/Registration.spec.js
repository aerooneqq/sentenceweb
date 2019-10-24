import React from "react";
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import Registration from './Registration';

describe("Registration component", () => { 
    it("should render correctly", () => { 
        const registration = shallow(<Registration />)

        expect(shallowToJson(registration)).toMatchSnapshot();
    });

    it("should have right text", () => { 
        const registration = shallow(<Registration />);

        expect(registration.find("p.inputNameText").at(0).text()).toBe("E-mail");
        expect(registration.find("p.inputNameText").at(1).text()).toBe("Password");
        expect(registration.find("p.inputNameText").at(2).text()).toBe("Repeat password");
    });

    it("should have proper initial state", () => { 
        const registration = shallow(<Registration />);

        const rightState = { 
            isLoading: false,
            email: "",
            password: "",
            repeatedPassword: ""
        };

        for (let key in rightState) { 
            expect(rightState[key]).toBe(registration.state(key));
        }
    });

    it("should show loader if state is isLoading", () => { 
        const registration = shallow(<Registration />);

        registration.setState({ 
            isLoading: true
        });

        expect(registration.find("div").at(0).hasClass("registrationLoaderCont")).toBe(true);
    });
});
