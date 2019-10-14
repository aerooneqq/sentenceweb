import React from "react"; 
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import Friends from "../Friends";

import SubHeader from "../../SubHeader/SubHeader";
import WorkplaceSearch from "../../../../../../../search/WorkplaceSearch";

describe("Friends", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<Friends />))).toMatchSnapshot();
    });

    it("should have SubHeader and Workplace search", () => { 
        const friends = shallow(<Friends />);

        expect(friends.find(SubHeader).exists()).toBe(true);
        expect(friends.find(WorkplaceSearch).exists()).toBe(true);
    });

    it("should have proper initial state", () => { 
        const friends = shallow(<Friends />);

        const properState = { 
            elements: []
        }

        for (let key in properState) { 
            expect(properState[key]).toStrictEqual(friends.state(key));
        }
    });
});