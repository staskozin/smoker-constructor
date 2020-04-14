import initialState from './initialState'

import { FORM_CHANGE_THICKNESS, FORM_CHANGE_STEEL } from './actions';

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_CHANGE_THICKNESS:
      return ({
        ...state,
        thickness: action.payload
      });
    case FORM_CHANGE_STEEL:
      return ({
        ...state,
        steel: action.payload
      });
    default:
      return state;
  }
};
