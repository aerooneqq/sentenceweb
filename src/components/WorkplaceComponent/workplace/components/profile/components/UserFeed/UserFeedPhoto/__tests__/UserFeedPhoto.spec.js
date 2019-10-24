import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import UserFeedPhoto from "../UserFeedPhoto";

describe("UserFeedPhoto", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<UserFeedPhoto />))).toMatchSnapshot();
    });

    it("should have proper initial state", () => { 
        const properState = { 
            isLoading: false,
            userPhoto: null
        } 

        const userFeedPhoto = shallow(<UserFeedPhoto />);

        for (let key in properState) { 
            expect(properState[key]).toBe(userFeedPhoto.state(key));
        }
    });

    it("should return proper user photo string from getUserPhoto method", () => { 
        const props = { 
            photo: "test string"
        }
        const userFeedPhoto = shallow(<UserFeedPhoto {...props}/>);

        expect(userFeedPhoto.instance().getUserPhoto()).toBe(`data:image/png;base64, ${props.photo}`);

    });
});