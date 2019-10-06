import React from 'react'
import { shallow } from 'enzyme'
import {shallowToJson} from "enzyme-to-json"
import ApplicationMessage from './ApplicationMessage';

describe('application message', () => { 
    it("should render correctly", () => { 
        const props = { 
            type: "success",
            message: "Message"
        }

        const applicationMessage = shallow(<ApplicationMessage {...props} />);
        expect(shallowToJson(applicationMessage)).toMatchSnapshot();
    });

    it('should display message', () => { 
        const props = { 
            type: "success",
            message: "The message"
        }

        const applicationMessage = shallow(<ApplicationMessage {...props} />);
        expect(applicationMessage.find("#errorTitleCont").text()).toBe("The message");
    });

    it ("should have success color class when success", () => { 
        const props = { 
            type: "success",
            message: "Message"
        }

        const applicationMessage = shallow(<ApplicationMessage {...props} />);
        expect(applicationMessage.find("#errorTitleCont").text()).toBe("Message");
        expect(applicationMessage.find("#errorTitleCont").hasClass("errorTitleContSuccess"));
    });

    it("must have error color class when error", () => { 
        const props = { 
            type: "error",
            message: "Yo!"
        }

        const applicationMessage = shallow(<ApplicationMessage {...props}/>);
        expect(applicationMessage.find("#errorTitleCont").text()).toBe("Yo!");
        expect(applicationMessage.find("#errorTitleCont").hasClass("errorTitleContError"));
    });

    it("must have default color class when type is not specified", () => { 
        const props = { 
            message: "Hello!"
        };

        const applicationMessage = shallow(<ApplicationMessage {...props} />);
        expect(applicationMessage.find("#errorTitleCont").text()).toBe("Hello!");
        expect(applicationMessage.find("#errorTitleCont").hasClass("defaultTitleContError"));
    });

    it("must render correctly when props are null", () => { 
        const props = { 
            message: null,
            type: null
        }

        const applicationMessage = shallow(<ApplicationMessage {...props} />);
        expect(applicationMessage.find("#errorTitleCont").text()).toBe("");
        expect(applicationMessage.find("#errorTitleCont").hasClass("defaultTitleContError"));
    });
});