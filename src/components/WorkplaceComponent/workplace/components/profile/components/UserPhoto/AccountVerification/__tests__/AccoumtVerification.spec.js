import React from "react";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import AccountVerification from "../AccountVerification";
import AccountVerificationLoader from "../AccountVerificationLoader/AccountVerificationLoader";

describe("Account verification", () => { 
    it("should render correctly after the state has changed", () => { 
        const accountVerification = shallow(<AccountVerification />);
        accountVerification.setState({ 
            isLoading: false,
            isFirstLoad: false,
        });

        expect(shallowToJson(accountVerification)).toMatchSnapshot();
    });

    it("should have AccountVerificationLoader when first loaded", () => { 
        const accountVerification = shallow(<AccountVerification />);
        expect(accountVerification.find("div#accountVerificationOutterContainer")
            .find(AccountVerificationLoader).exists()).toBe(true);
    });

    it("should have proper initial state", () => { 
        const accountVerification = shallow(<AccountVerification />);
        const properState = { 
            isLoading: true,
            isFirstLoad: true,
            isAccVerified: null,
            inputValue: ""
        }

        for (let key in properState) { 
            expect(properState[key]).toBe(accountVerification.state(key));
        }
    });

    it("chould call checkIfAccVerified when componentDidMount", () => { 
        const spy = jest.spyOn(AccountVerification.prototype, "checkIfAccVerified").mockImplementation(() => {});
        const accountVerification = shallow(<AccountVerification />);

        expect(spy).toBeCalled();
    })
});