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
        const spy = jest.spyOn(DeleteAccount.prototype, 'deleteAccount').mockImplementation(() => {});
        const deleteAccount = shallow(<DeleteAccount />);

        deleteAccount.find('button').simulate('click');
        
        expect(spy).toBeCalled()
    });
});