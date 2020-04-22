import { combineReducers } from "redux";

import radioReducer from './radio/reducers';
import checkboxReducer from './checkbox/reducers';

export default combineReducers({
  radio: radioReducer,
  checkbox: checkboxReducer
});
