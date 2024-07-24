import React from "react";
import Notification from "./Notifications.js"
import { shallow } from "enzyme";


describe("Tests Notifications", () => {
    it("Renders correctly", () => {
        const wrapper = shallow(<Notification />)
        expect(wrapper).toBeDefined();
    })
    it("Renders 3 list items correctly", () => {
        const wrapper = shallow(<Notification />)
        expect(wrapper.find("li")).toHaveLength(3);
    })
    it("It contains the text 'Here is the list of notifications'", () => {
        const wrapper = shallow(<Notification />)
        expect(wrapper.text()).toContain("Here is the list of notifications");
    })    
})
