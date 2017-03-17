import {expect} from "chai";
import * as types from '../../constants/ActionTypes';
import * as actions from "../../actions/loginActions";

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const name = 'niita';
    const expectedAction = {
      type: types.SET_NAME,
      payload: name
    }
    expect(actions.setUserName(name)).to.deep.equal(expectedAction)
  })
})
