import React from "react";
import {expect} from "chai";
import {shallow, mount} from "enzyme";
import {Register} from "../../containers/Register";
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('Register component', () => {

    const wrapper = mount(<Register />)
    it('contains 3 input field', () => {
        expect(
           wrapper.find('input').getNodes().length
       ).equal(3)
    });
    it('contains username value empty', () => {
        expect(
            wrapper.state('name')
        ).to.equal('')
    });
    it('contains email value empty', () => {
        expect(
            wrapper.state('email')
        ).to.equal('')
    });
    it('contains password value empty', () => {
        expect(
            wrapper.state('password')
        ).to.equal('')
    });
    it('set username value onchange event in state', () => {
         wrapper.find('input[name="name"]').simulate('change', { target: { value: 'priti',
         name: 'name' } })
         expect(
             wrapper.state('name')
         ).to.equal('priti')
    });
    it('set email value onchange event in state', () => {
         wrapper.find('input[name="email"]').simulate('change', { target: { value: 'priti@gm.com',
         name: 'email' } })
         expect(
             wrapper.state('email')
         ).to.equal('priti@gm.com')
    });
    it('set password value onchange event in state', () => {
         wrapper.find('input[name="password"]').simulate('change', { target: { value: 'priti123',
         name: 'password' } })
         expect(
             wrapper.state('password')
         ).to.equal('priti123')
    });
    it('check submit button onclick', () => {
        wrapper.find('button').simulate('click')
        
    });
});