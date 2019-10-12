import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import MonthActivity from "../MonthActivity";
import UserActivityData from "../../UserActivityData/UserActivityData";
import { monitorEventLoopDelay } from "perf_hooks";

const props = { 
    activitiesData: 3,
    daysCount: 30, 
    month: { 
        firstDayNum: 4,
        name: "August"
    }
}

describe("MonthActivity", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<MonthActivity {...props}/>))).toMatchSnapshot();
    });

    it("should have proper state", () => { 
        const properState = { 
            isExtraDataVisible: false,
            extraData: null
        }

        const monthActivity = shallow(<MonthActivity {...props}/>);

        for (let key in properState) { 
            expect(properState[key]).toBe(monthActivity.state(key));
        }
    });

    it("should diplay additional data when isExtraDataVisible is true", () => { 
        const monthActivity = shallow(<MonthActivity {...props} />);

        monthActivity.setState({ isExtraDataVisible: true });
        expect(monthActivity.find(UserActivityData).exists()).toBe(true);
    });

    it("should display month name from props", () => { 
        const monthActivity = shallow(<MonthActivity {...props}/>);

        expect(monthActivity.find("div.monthNameCont").text()).toBe(props.month.name);
    });
});