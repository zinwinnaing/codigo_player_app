import { combineReducers } from "redux";
import authReducer from "../services/authSlice";
import playerReducer from "../services/playerSlice";

const appReducer = combineReducers({
  players: playerReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
