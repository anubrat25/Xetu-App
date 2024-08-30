// src/redux/store.js

import { createStore, combineReducers } from 'redux';
import bookingReducer from './reducers/bookingReducer';

const rootReducer = combineReducers({
  booking: bookingReducer,
});

export const store = createStore(rootReducer);