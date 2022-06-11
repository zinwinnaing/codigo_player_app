import { combineReducers } from "redux";
import playerReducer from "../services/playerSlice";
import teamReducer from "../services/teamSlice";

const appReducer = combineReducers({
  players: playerReducer,
  teams: teamReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
