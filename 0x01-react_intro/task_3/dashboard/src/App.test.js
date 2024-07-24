import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("<App />", ()=> {
    it("renders correctly", ()=> {
        const wrapper = shallow(<App />); 
        expect(wrapper).toBeDefined(); 
    })
    it("Renders a div with a class of App-headeer", ()=> {
        const wrapper = shallow(<App />);  
        expect(wrapper.find(".App-header")).toHaveLength(1); 
    })
    it("Renders a div with a class of App-body", ()=> {
        const wrapper = shallow(<App />);  
        expect(wrapper.find(".App-body")).toHaveLength(1); 
    })
    it("Renders a div with a class of App-footer", ()=> {
        const wrapper = shallow(<App />);  
        expect(wrapper.find(".App-footer")).toHaveLength(1); 
    })
})