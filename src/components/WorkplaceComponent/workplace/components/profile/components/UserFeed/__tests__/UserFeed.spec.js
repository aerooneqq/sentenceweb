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

    it("should properly clear the aray (delete all repeated elements", () => { 
        const userFeed = shallow(<UserFeed />);
        let array = [1, 1, 1, 2, 2, 2, 3, 0, 0, 56, 56, 6];

        array = userFeed.instance()._clearArray(array);
        expect(array).toStrictEqual([1, 2, 3, 0, 56, 6]);

        array = userFeed.instance()._clearArray([]);
        expect(array).toStrictEqual([]);

        //If the array is null or undef, the method must return empty array
        array = userFeed.instance()._clearArray(null);
        expect(array).toStrictEqual([]);
        
        array = userFeed.instance()._clearArray(undefined);
        expect(array).toStrictEqual([])
    });

    it("should call uploadUserFeed method from componentDidMount", () => {
        const spy = jest.spyOn(UserFeed.prototype, 'uploadUserFeed').mockImplementation(() => {});
        shallow(<UserFeed />);

        expect(spy).toBeCalled();
    });

    it("should call insertNewPost when button is clicked", () => { 
        const spy = jest.spyOn(UserFeed.prototype, 'insertNewPost').mockImplementation(() => {});
        const userFeed = shallow(<UserFeed />);

        userFeed.find('button').simulate('click');
        expect(spy).toBeCalled();
    });
});