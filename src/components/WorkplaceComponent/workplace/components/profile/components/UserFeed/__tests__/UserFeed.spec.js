import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import UserFeed from "../UserFeed";

describe("UserFeed", () => { 
    it("should render correctly", () => { 
        const userFeed = shallow(<UserFeed />);
        expect(shallowToJson(userFeed)).toMatchSnapshot();
    });

    it("should have proper initial state", () => { 
        const properState = { 
            isFirstLoad: true,
            textAreaValue: ""
        }
        const userFeed = shallow(<UserFeed />);

        for (let key in properState) { 
            expect(properState[key]).toBe(userFeed.state(key));
        }
    });
});