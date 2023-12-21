// store.js
import { createStore } from "redux";
import rootReducer from "./reducers"; // Import your root reducer

const store = createStore(
  rootReducer
  // Add any middleware or enhancers here, such as Redux DevTools
);

export default store;
