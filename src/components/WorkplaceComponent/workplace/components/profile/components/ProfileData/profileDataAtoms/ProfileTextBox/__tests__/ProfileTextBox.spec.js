import React from "react";
import {shallow} from "enzyme"; 
import {shallowToJson} from "enzyme-to-json";
import ProfileTextBox from "../ProfileTextBox";

const spy = jest.fn(() => {});
const props = { 
    propertyName: "property name",
    propertyDescription: "property description",
    propertyValue: "value",
    updateData: spy
}

describe("ProfileTextBox", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<ProfileTextBox {...props}/>))).toMatchSnapshot();
    });

    it("should have proper intiial state", () => { 
        const profileTextBox = shallow(<ProfileTextBox {...props}/>);

        const properState = { 
            value: props.propertyValue
        }

        for (let key in properState) { 
            expect(properState[key]).toBe(profileTextBox.state(key));
        }
    });

    it("should call updateData from props when content is changed", () => { 
        const profileTextBox = shallow(<ProfileTextBox {...props}/>);

        const changeEvent = {
            preventDefault() {},
            target: { value: 'the-value' }
        }

        profileTextBox.find("input.propertyValueInput").simulate("Change", changeEvent);

        expect(spy).toBeCalled();
        expect(profileTextBox.state("value")).toBe(changeEvent.target.value);
    });

    it("should display right propert name and property description", () => { 
        const profileTextBox = shallow(<ProfileTextBox {...props}/>);
    
        expect(profileTextBox.find("div.propertyNameText").text()).toBe(props.propertyName);
        expect(profileTextBox.find("div.propertyDescription").text()).toBe(props.propertyDescription);
    });
});