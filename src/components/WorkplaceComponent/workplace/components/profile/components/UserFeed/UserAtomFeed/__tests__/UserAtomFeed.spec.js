import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import UserAtomFeed from "../UserAtomFeed";
import DateService from "../../../../../../../../../services/Dates/DateService";

describe("UserAtomFeed", () => { 
    it("should render correctly", () => { 
        const props = { 
            message: "test message"
        }

        expect(shallowToJson(shallow(<UserAtomFeed />))).toMatchSnapshot();
    });

    it("should not crash when props are null", () => { 
        const props = { 
            message: null,
            date: null
        }

        shallow(<UserAtomFeed {...props}/>);
    });

    it("should not crash when props are undefined", () => { 
        const props = { 
            message: undefined,
            date: undefined,
        }

        shallow(<UserAtomFeed {...props}/>)
    });

    it("should have proper state", () => { 
        const props = { 
            message: "test message"
        }

        const properState = { 
            message: props.message,
        }

        const userAtomFeed = shallow(<UserAtomFeed {...props}/>)

        for (let key in properState) { 
            expect(properState[key]).toBe(userAtomFeed.state(key));
        }
    });
});