import React from "react"; 
import {shallow} from "enzyme"; 
import {shallowToJson} from "enzyme-to-json";
import UserActivitySingleData from "../UserActivitySingleData";

const props = { 
    activity: { 
        activity: "test name",
        activityDate: "30.05.2000T23131231" 
    }
}

describe("UserActivitySingleData", () => {
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<UserActivitySingleData {...props}/>))).toMatchSnapshot();
    });

    it("should corectly display name", () => { 
        const userActivitySingleData = shallow(<UserActivitySingleData {...props}/>);
        expect(userActivitySingleData.find("div.singleActivityName").text()).toBe(props.activity.activity);
    });

    
});