import React from 'react'
import { shallow, mount, render } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import DeleteAccount from "../DeleteAccount";

describe("ProfileDataItem", () => { 
    it("should render corrctly", () => { 
        const deleteAccount = shallow(<DeleteAccount />);

        expect(shallowToJson(deleteAccount)).toMatchSnapshot();
    });

    it("should call delete account method", () => { 
        const deleteAccount = shallow(<DeleteAccount />);

        const spy = jest.spyOn(deleteAccount.instance(), 'deleteAccount').mockImplementation(() => {});
        deleteAccount.find('button').simulate('click');
        
        expect(spy).toBeCalled()
    });
});