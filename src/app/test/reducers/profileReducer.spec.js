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
	        payload: [
		        {
		        	author_id: "126121157@N04",
		        	title: "Grocery, New York, United States",
		        	media: {
		        		m: "http://farm4.staticflick...930466_9ca3ca45d4_m.jpg"
		        	}
		        },
		        {
		        	author_id: "30550067@N06",
		        	title: "G22_9586",
		        	media: {
		        		m: "http://farm3.staticflick...208750_c6636f688b_m.jpg"
		        	}
		        }
	        ]
	      })
	    ).to.deep.equal(
	        {
	        	data: [
			        {
			        	author_id: "126121157@N04",
			        	title: "Grocery, New York, United States",
			        	media: {
			        		m: "http://farm4.staticflick...930466_9ca3ca45d4_m.jpg"
			        	}
			        },
			        {
			        	author_id: "30550067@N06",
			        	title: "G22_9586",
			        	media: {
			        		m: "http://farm3.staticflick...208750_c6636f688b_m.jpg"
			        	}
			        }
		        ]
	        }
	    )
	  })
})