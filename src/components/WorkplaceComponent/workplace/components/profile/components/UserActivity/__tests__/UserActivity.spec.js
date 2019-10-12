import React from "react";
import { shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import UserActivity from "../UserActivity";

describe("UserActivity", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<UserActivity />))).toMatchSnapshot();
    });

    it("should have proper initial state", () => { 
        const properState = { 
            isFirstLoad: true
        }

        const userActivity = shallow(<UserActivity />);

        for (let key in properState) { 
            expect(properState[key]).toBe(userActivity.state(key));
        }
    });
});