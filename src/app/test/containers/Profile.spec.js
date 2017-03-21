import configureMockStore from 'redux-mock-store';
import React from "react";
import thunk from 'redux-thunk';
import {expect} from "chai";
import {Provider} from 'react-redux';
import {mount, shallow} from 'enzyme';
import Profile from "../../containers/Profile";
import {testdata} from '../actions/testdata';
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
describe('Container profile', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
        profile: {
            data: ""
        }
    });
  });
  it('should render the profile container with images', () => {

    const wrapper = mount(
      <Provider store={store}>
        <Profile />
      </Provider>
    );

    expect(wrapper.find(Profile).length).to.equal(1);
    const container = wrapper.find(Profile);
    expect(container.find(Profile).length).to.equal(1);
    expect(container.find(Profile).props()).to.deep.equal({});
  });

  it('should dispatch data using mapDispatchToProps', () => {

        const wrapper = mount(<Provider store={store}>
            <Profile LoadImages />
           </Provider>
            );
        wrapper.find('button').simulate('click');
  });
});