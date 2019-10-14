import React from "react"; 
import {shallow} from "enzyme"; 
import {shallowToJson} from "enzyme-to-json";
import UserActivityData from "../UserActivityData";

const closeActivitySpy = jest.fn(() => {});
const props = { 
    activityData: {
        activities: []
    },
    closeActivityData: closeActivitySpy
}

describe("UserActivityData", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<UserActivityData {...props}/>))).toMatchSnapshot();
    });

    it("should have proper intial state", () => { 
        const userActivityData = shallow(<UserActivityData {...props}/>);

        const properState = { 
            isCloseIconActive: false
        }

        for (let key in properState) { 
            expect(properState[key]).toBe(userActivityData.state(key));
        }
    });

    it("should change isCloseIconActive to true after mouse enter is called", () => { 
        const userActivityData = shallow(<UserActivityData {...props} />);
        userActivityData.find("img").simulate("mouseEnter");

        expect(userActivityData.state("isCloseIconActive")).toBe(true);
    });

    it("should change isCloseIconActive to false whren the mouse leave event is called", () => { 
        const userActivityData = shallow(<UserActivityData {...props}/>);
        userActivityData.find("img").simulate("mouseLeave");

        expect(userActivityData.state("isCloseIconActive")).toBe(false);
    });

    it("should call closeActivityData when img is clicked", () => { 
        const userActivityData = shallow(<UserActivityData {...props}/>);
        userActivityData.find("img").simulate("click");

        expect(closeActivitySpy).toHaveBeenCalledTimes(1);
    })
})