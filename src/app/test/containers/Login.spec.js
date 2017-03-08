import React from "react";
import {expect} from "chai";
import {shallow, mount} from "enzyme";
import {Login} from "../../containers/Login";
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('login component', () => {

    const wrapper = mount(<Login />)
    it('Contains 2 input field', () => {
       expect(
           wrapper.find('input').getNodes().length
       ).equal(2)
    });
    it('contains username initial value empty', () => {
        expect(
            wrapper.state('name')
        ).to.equal('')
    });
    it('contains password initial value empty', () => {
        expect(
            wrapper.state('password')
        ).to.equal('')
    });
    it('set username value onchange event in state', () => {
         wrapper.find('input[name="name"]').simulate('change', { target: { value: 'Hello',
         name: 'name' } })
         expect(
             wrapper.state('name')
         ).to.equal('Hello')
    });
    it('set password value onchange event in state', () => {
         wrapper.find('input[name="password"]').simulate('change', { target: { value: 'priti',
         name: 'password' } })
         expect(
             wrapper.state('password')
         ).to.equal('priti')
    });
    it('check submit button onclick', () => {
        wrapper.find('button').simulate('click')
        
    });
});