import React from "react";
import {expect} from "chai";
import {shallow, mount} from "enzyme";
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Login from "../../containers/Login";
import thunk from 'redux-thunk';
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
describe('login component', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            name: '',
            password: ''
        });

    });

    it('Contains 2 input field', () => {
       
    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
       expect(
           wrapper.find('input').getNodes().length
       ).equal(2)
    });
    it('contains username initial value empty', () => {

    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    wrapper.setState({
        name: '',
        password: ''
    });
        expect(
            wrapper.state('name')
        ).to.equal('')
    });
    it('contains password initial value empty', () => {

    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    wrapper.setState({
        name: '',
        password: ''
    });
        expect(
            wrapper.state('password')
        ).to.equal('')
    });
    it('set username value onchange event in state', () => {

    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    wrapper.setState({
            name: 'Hello',
            password: 'priti'
        });
         wrapper.find('input[name="name"]').simulate('change', { target: { value: 'Hello',
         name: 'name' } })
         expect(
             wrapper.state('name')
         ).to.equal('Hello')
    });
    it('set password value onchange event in state', () => {

    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    wrapper.setState({
        name: 'Hello',
        password: 'priti'
    });
         wrapper.find('input[name="password"]').simulate('change', { target: { value: 'priti',
         name: 'password' } })
         expect(
             wrapper.state('password')
         ).to.equal('priti')
    });
    it('check submit button onclick', () => {

    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    wrapper.setState({
        name: 'Hello',
        password: 'priti'
    });
        wrapper.find('button').simulate('click')
        
    });

});