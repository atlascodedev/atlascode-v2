import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const mockReducer = (state = 0, action) => {
  switch (action.type) {
    case "MOCK_CASE":
      return { ...state };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  mock: mockReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
