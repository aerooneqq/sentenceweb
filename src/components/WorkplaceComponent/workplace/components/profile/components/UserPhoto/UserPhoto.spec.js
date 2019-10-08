import React from 'react'
import { shallow, render } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import UserPhoto from "./UserPhoto";

describe("UserPhoto", () => { 
    it("should render corectly", () => { 
        const userPhoto = shallow(<UserPhoto />);

        expect(shallowToJson(userPhoto)).toMatchSnapshot();
    });

    it("should have proper initial state", () => { 
        const userPhoto = shallow(<UserPhoto />);

        const rightState = { 
            isPhotoUpdating: true,
            isFirstLoad: true,
            userPhoto: null
        }

        for (let key in rightState) { 
            expect(userPhoto.state(key)).toBe(rightState[key]);
        }
    });
});