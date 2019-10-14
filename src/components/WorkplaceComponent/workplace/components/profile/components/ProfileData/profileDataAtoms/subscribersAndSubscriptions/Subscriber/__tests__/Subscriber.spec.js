import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import Subscriber from "../Subscriber";

import DeleteSubBtn from "../../DeleteSubBtn/DeleteSubBtn";
import ViewUserPageBtn from "../../ViewUserPageBtn/ViewUserPageBtn";

const propsSpy = jest.fn(() => {});
const props = { 
    subscriber: { 
        name: "Aero", 
        userID: 1,
        birthDate: "30.05.2000T23131212"
    }, 
    deleteSubscriber: propsSpy 
}

describe("Subscriber", () => {
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<Subscriber {...props}/>))).toMatchSnapshot();
    });

    it("should display right data", () => { 
        const subscriber = shallow(<Subscriber {...props}/>);

        expect(subscriber.find("div.friendsListUserName").text()).toBe(props.subscriber.name);

        const {subscriber: {birthDate}} = props;
        let rightDate =  birthDate.substr(0, 4) + "-" + birthDate.substr(5, 2) + 
            "-" + birthDate.substr(8, 2);
        expect(subscriber.find("div.friendsListUserBirthDate").text()).toBe(rightDate);
    });

    it("should contain btns", () => { 
        const subscriber = shallow(<Subscriber {...props}/>);

        expect(subscriber.find(DeleteSubBtn).exists()).toBe(true);
        expect(subscriber.find(ViewUserPageBtn).exists()).toBe(true);
    })
})