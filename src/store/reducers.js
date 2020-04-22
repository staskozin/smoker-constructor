import { combineReducers } from "redux";
import formReducer from './form/reducers';
import { viewReducer } from './view/reducers';
import { priceReducer } from './price/reducers';

export default combineReducers({
  form: formReducer,
  view: viewReducer,
  price: priceReducer
});
