import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import dashboardReducer from "../MemberArea/reducer/dashboard";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      dashboard: dashboardReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
