import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import UserSearchResult from "../UserSearchResult";

import SubscribeBtn from "../../SubscribeBtn/SubscribeBtn";

const props = { 
    searchResult: { 
        name: "name",
        birthDate: "30.05.2000T21312312312312",
        userID: 1,
    },
    subscribe: () => {}
}

describe("UserSearchResult", () => { 
    it("should render correctly", () => { 
        expect(shallowToJson(shallow(<UserSearchResult {...props}/>))).toMatchSnapshot();
    });

    it("should display right info about user", () => { 
        const userSearchResult = shallow(<UserSearchResult {...props}/>);

        expect(userSearchResult.find("div.friendsListUserName").text()).toBe(props.searchResult.name);
        
        let {searchResult: {birthDate}} = props;
        birthDate = birthDate.substr(0, 4) + "-" + birthDate.substr(5, 2) + "-" + birthDate.substr(8, 2);
        
        expect(userSearchResult.find("div.friendsListUserBirthDate").text()).toBe(birthDate);
    });  

    it("should have subscribe btn", () => { 
        const userSearchResult = shallow(<UserSearchResult {...props} />);

        expect(userSearchResult.find(SubscribeBtn).exists()).toBe(true);
    })
});