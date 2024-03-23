// src/rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";
// import counterReducer from './features/counter/counterSlice'; // Assuming you have a counter slice
// Import other reducers here if you have more slices

const rootReducer = combineReducers({
  counter: {},
  // Add other reducers here if you have more slices
});

export default rootReducer;
