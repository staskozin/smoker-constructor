import { combineReducers } from "redux";
import { viewReducer } from './view/reducers';
import { priceReducer } from './price/reducers';

export default combineReducers({
  view: viewReducer,
  price: priceReducer
});
