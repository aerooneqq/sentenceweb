import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import UserPhotoLoader from "../UserPhotoLoader";

describe("UserPhotoLoader", () => { 
    it("should render corectly", () => { 
        const userPhotoLoader = shallow(<UserPhotoLoader />);

        expect(shallowToJson(userPhotoLoader)).toMatchSnapshot();
    });

    it("should have userPhotoLoaderTopBar and userPhotoLoaderPhotoCont", () => { 
        const userPhotoLoader = shallow(<UserPhotoLoader />);

        expect(userPhotoLoader.find("div.userPhotoLoaderTopBar").exists()).toBe(true);
        expect(userPhotoLoader.find("div.userPhotoLoaderPhotoCont").exists()).toBe(true);
    });
});