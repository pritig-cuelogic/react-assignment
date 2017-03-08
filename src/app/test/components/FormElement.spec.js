import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import  {FormElement} from "../../components/FormElement";

describe('FormElement', () => {
        
        const wrapper = shallow(<FormElement class="form-control" type= "text" 
         name="name" value= "" />);
        it('render without exploading ', () => {
            expect(
                wrapper.length
            ).equal(1)
        });
        it('checking class of input field', () => {
            expect(
                wrapper.props().className
            ).to.equal('form-control')
        });
        it('checking type of input field', () => {
            expect(
                wrapper.props().type
            ).to.not.be.undefined;
        })
        it('checking name of input field', () => {
            expect(
                wrapper.props().name
            ).to.not.be.undefined;

        })
        it('checking value of input field', () => {
            expect(
                wrapper.props().value
            ).to.not.be.undefined;

        })
});