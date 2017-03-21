import {expect} from "chai";
import * as types from '../../constants/ActionTypes';
import profileReducer from '../../reducers/profileReducer';

describe('profileReducer', () => {
	it('should return the initial state', () => {
    expect(
      profileReducer(undefined, {})
    ).to.deep.equal(
      {
        data: ""
      }
    )
   })
	  it('should handle DATA_RECEIVE', () => {
	    expect(
	      profileReducer({data: ""}, {
	        type: types.DATA_RECEIVE,
	        payload: {
						thumbnailUrl: "http://placehold.it/150/92c952",
						url: "http://placehold.it/600/92c952"
					}
	      })
	    ).to.deep.equal(
	        {
	        	data:  {
							thumbnailUrl: "http://placehold.it/150/92c952",
						url: "http://placehold.it/600/92c952"
					}
	        }
	    )
	  })
})