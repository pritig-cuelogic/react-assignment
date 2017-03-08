import React from "react";
import {expect} from "chai";
import {shallow, mount} from "enzyme";
import  {Root} from "../../containers/Root";
import  {Header} from "../../components/Header";
import {Profile} from "../../containers/Profile";
import {Dashboard} from "../../containers/Dashboard";
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('Root component', () => {
    const wrapper = mount(<Root><Dashboard /><Profile /></ Root>);
    it('contains header component ', () => {
            expect(
                wrapper.contains(<Header />)
            ).to.equal(true);
    });
    it('contains Dashboard component', () => {
        expect(
            wrapper.contains(<Dashboard />)
        ).to.equal(true);
    });
    it('contains Profile component', () => {
        expect(
            wrapper.contains(<Profile />)
        )
    });
});