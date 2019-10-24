import React from 'react'
import { shallow } from 'enzyme'
import InspiringWords from './InspiringWords';

describe("Inspiring words", () => { 
    it("should render correctly", () => { 
        const inspiringWords = shallow(<InspiringWords />);

        expect(inspiringWords.find("div.inspiringWord").at(0).text()).toBe("Think.");
        expect(inspiringWords.find("div.inspiringWord").at(1).text()).toBe("Create.");
        expect(inspiringWords.find("div.inspiringWord").at(2).text()).toBe("Render.");
    }); 
})