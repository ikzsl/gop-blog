import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';

const currentUser = handleActions(
  {
    [actions.logoutUser]: () => {},
    [actions.loginUser]: (state, action) => action.payload,
  },
  {},
);

const errors = handleActions(
  {
    [actions.changeFetchStatus]: (state, action) => action.payload,
  },
  {},
);

const loading = handleActions(
  {
    [actions.changeLoadingStatus]: (state, action) => action.payload,
  },
  false,
);

export default combineReducers({
  currentUser,
  errors,
  loading,
});
