import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import Loader from './Loader';

describe('Loader normal rendering', () => {
  it('usual props render', () => {
    const props = {
      innerWidth: 20,
      outterWidth: 30,
      message: "Test message"
    }

    const loader = shallow(<Loader {...props}/>);
    expect(loader.find("div.loaderMessageCont").text()).toBe("Test message");
  });

  it('null props render', () => {
    const props = {
      innerWidth: null,
      outterWidth: null,
      message: null
    }
    
    const loader = shallow(<Loader {...props}/>);

    expect(loader.find("div.loaderMessageCont").text()).toBe("");
    expect(loader).toMatchSnapshot()
  });

  it("undefined props render", () => { 
    const props = { 
      innerWidth: undefined,
      outterWidth: undefined,
      message: undefined 
    }

    const loader = shallow(<Loader {...props}/>);

    expect(loader.find("div.loaderMessageCont").text()).toBe("");
    expect(loader).toMatchSnapshot()
  });
})