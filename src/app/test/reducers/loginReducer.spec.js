import {expect} from "chai";
import * as types from '../../constants/ActionTypes';
import loginReducer from '../../reducers/loginReducer';

describe('loginReducer', () => {
	it('should return the initial state', () => {
    expect(
      loginReducer(undefined, {})
    ).to.deep.equal(
      {
        name : "Neha"
      }
    )
   })
	  it('should handle SET_NAME', () => {
	    expect(
	      loginReducer({name : "Neha"}, {
	        type: types.SET_NAME,
	        payload: 'priya'
	      })
	    ).to.deep.equal(
	        {
	          name: 'priya'
	        }
	    )
	  })
})
