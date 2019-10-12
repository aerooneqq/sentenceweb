import React from "react";
import {shallow, render} from "enzyme"; 
import {shallowToJson} from "enzyme-to-json";
import SingleUserActivity from "../SingleUserActivity";

function handleSingleUserActivityClickDemo(x) { }

const props = { 
    activityData: { 
        count: 10
    },
    handleSingleUserActivityClick: handleSingleUserActivityClickDemo
}

describe("SingleUserActivity", () => { 
    it("should render corectly", () => { 
        expect(shallowToJson(shallow(<SingleUserActivity {...props}/>))).toMatchSnapshot();
    });

    it("should display right count", () => { 
        const singleUserActivity = shallow(<SingleUserActivity {...props}/>);

        expect(singleUserActivity.find("span").text()).toBe(props.activityData.count.toString());
    });

    it("should call the handleSingleActivityClick method when outter div os clicked", () => {
        const spy = jest.spyOn(SingleUserActivity.prototype, 'handleSingleActivityClick').mockImplementation(() => {});
        const singleUserActivity = shallow(<SingleUserActivity {...props} />);
        singleUserActivity.find("div.singleUserActivityCont").simulate("click");

        expect(spy).toBeCalled();
    });

    it("should call the handleSingleUserActivityClick method from props" + 
       "when handleSingleActivityClick is called", () => { 
        
        const spy = jest.spyOn(props, 'handleSingleUserActivityClick');
        const singleUserActivity = shallow(<SingleUserActivity {...props}/>);

        singleUserActivity.instance().handleSingleActivityClick();

        expect(spy).toBeCalled();
    });
});