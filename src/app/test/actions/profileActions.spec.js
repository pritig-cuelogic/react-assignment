import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {expect} from "chai";
import * as types from '../../constants/ActionTypes';
import * as actions from "../../actions/profileActions";
import {testdata} from './testdata';
import nock from 'nock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates DATA_RECEIVE when fetching todos has been done', () => {
        nock('http://jsonplaceholder.typicode.com')
        .get('/albums/1/photos')
        .reply(200, testdata
            )
        const expectedActions = [{
            type: types.DATA_RECEIVE,
            payload: testdata
        }]
        const store = mockStore(testdata)
        return store.dispatch(actions.LoadImages())
        .then(() => { 
            expect( store.getActions()).to.deep.equal(expectedActions)
      })
    })
})