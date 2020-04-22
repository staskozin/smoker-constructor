import initialState from './initialState';

import {
  FORM_CHANGE_THICKNESS,
  FORM_CHANGE_STEEL,
  FORM_CHANGE_CHIPS
} from './actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_CHANGE_THICKNESS:
      return {
        ...state,
        thickness: {
          ...state.thickness,
          checked: action.payload
        }
      };
    case FORM_CHANGE_STEEL:
      return {
        ...state,
        steel: {
          ...state.steel,
          checked: action.payload
        }
      };
    case FORM_CHANGE_CHIPS:
      return {
        ...state,
        chips: {
          ...state.chips,
          checked: action.payload
        }
      };
    default:
      return state;
  }
};
