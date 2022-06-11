import { combineReducers } from 'redux';


const appReducer = combineReducers({

});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
