import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {expect} from "chai";
import * as types from '../../constants/ActionTypes';
import * as actions from "../../actions/profileActions";
import nock from 'nock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates DATA_RECEIVE when fetching todos has been done', () => {
        nock('http://api.flickr.com')
        .get('/services/feeds/photos_public.gne?jsoncallback=?&tags=apples&tagmode=any&format=json')
        .reply(200, { body: { todos: ['do something'] }})
        const expectedActions = {
            type: types.DATA_RECEIVE,
            payload: { todos: ['do something']  } 
        }
        const store = mockStore({ todos: [] })
        return store.dispatch(actions.LoadImages())
        .then(() => { 
            expect(store.getActions()).to.deep.equal(expectedActions)
      })
    })
})