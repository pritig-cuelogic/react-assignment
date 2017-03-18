import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import  {Dashboard} from "../../components/Dashboard";

describe('Dashboard', () => {
    
    const wrapper = shallow(<Dashboard />);
    it('have 1 div.', () => {
        expect(
            wrapper.find('div').length
        ).equal(1)
    });
    it('have 1 p element', () => {
        expect(
            wrapper.find('p').length
        ).equal(1)
    });
    it('div is parent element of  p element', () => {
        expect(
            wrapper.find('p').parent().is('div')
        ).to.equal(true)
    });
});
