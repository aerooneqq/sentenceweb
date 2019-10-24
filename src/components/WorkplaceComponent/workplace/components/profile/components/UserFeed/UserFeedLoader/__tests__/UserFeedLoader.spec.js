import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import UserFeedLoader from "../UserFeedLoader";
import UserFeedAtomLoader from "../UserFeedAtomLoader";

describe("UserFeedLoader", () => {
    it("should render correctly", () => {
        expect(shallowToJson(shallow(<UserFeedLoader />))).toMatchSnapshot();
    });

    it("should have 4 UserFeedAtomLoader", () => { 
        const userFeedLoader = shallow(<UserFeedLoader />);

        expect(userFeedLoader.find(UserFeedAtomLoader).length).toBe(4);
    });
});