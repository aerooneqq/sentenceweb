import React from "react"; 
import {shallow} from "enzyme"; 
import {shallowToJson} from "enzyme-to-json";
import Subscription from "../Subscription";

import ViewUserPageBtn from "../../ViewUserPageBtn/ViewUserPageBtn";
import UnsubscribeBtn from "../../UnsubscribeBtn/UnsubscribeBtn";


const props = { 
    subscription: { 
        name: "Aero", 
        userID: 1,
        birthDate: "30.05.2000T23131212"
    },
    deleteSubscription: () => {}
}

describe("Subscription", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<Subscription {...props}/>))).toMatchSnapshot();
    });

    it("should display the subscription information", () => { 
        const subscription = shallow(<Subscription {...props}/>);

        expect(subscription.find("div.subscriptionsListUserName").text()).toBe(props.subscription.name);

        let {subscription: {birthDate}} = props;
        birthDate = birthDate.substr(0, 4) + "-" + birthDate.substr(5, 2) + "-" + birthDate.substr(8, 2);

        expect(subscription.find("div.subscriptionsListUserBirthDate").text()).toBe(birthDate);
    });

    it("should contain btns", () => {
        const subscription = shallow(<Subscription {...props}/>);

        expect(subscription.find(ViewUserPageBtn).exists()).toBe(true);
        expect(subscription.find(UnsubscribeBtn).exists()).toBe(true);
    });
});