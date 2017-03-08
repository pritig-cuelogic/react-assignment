import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import  {Header} from "../../components/Header";

describe('Header', () => {

    it('render without exploading ', () => {
        expect(
            shallow(
                <Header />
            ).length
        ).equal(1)
    });
    it('creating 3 link in header', () => {
        expect(
            shallow(
                 <Header />
            ).find('Link').length
        ).equal(3)
    });
    it('check class of ul element', () => {
        expect(
            shallow(
                <Header />
            ).find('ul').hasClass('nav navbar-nav')
        ).to.equal(true)
    });
    it('check for div element', () => {
        expect(
            shallow(
                 <Header />
            ).find('div').length
        ).equal(2)
    });
});