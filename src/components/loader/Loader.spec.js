import React from 'react'
import { shallow } from 'enzyme'
import Loader from './Loader';

describe('Loader ', () => {
  const props = {
    innerWidth: 20,
    outterWidth: 30,
    message: "Test message"
  }

  const loader = shallow(<Loader {...props}/>);

  it('render initial', () => {
    expect(loader.find("div.loaderMessageCont").text()).toBe("Test message")
  })
})