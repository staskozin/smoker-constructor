import initialState from './initialState'

import {
  FORM_CHANGE_THICKNESS,
  FORM_CHANGE_STEEL,
  FORM_CHANGE_CHIPS,
  FORM_CHANGE_WATERLOCK,
  FORM_CHANGE_COVER,
  FORM_CHANGE_HOOKS,
  FORM_CHANGE_STAND,
  FORM_CHANGE_THERMOMETER,
  FORM_CHANGE_FITTING
} from './actions';

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_CHANGE_THICKNESS:
      return {
        ...state,
        thickness: action.payload
      };
    case FORM_CHANGE_STEEL:
      return {
        ...state,
        steel: action.payload
      };
    case FORM_CHANGE_CHIPS:
      return {
        ...state,
        chips: action.payload
      };
    case FORM_CHANGE_WATERLOCK:
      return {
        ...state,
        waterlock: !action.payload
      };
    case FORM_CHANGE_COVER:
    return {
      ...state,
      cover: !action.payload
    };
    case FORM_CHANGE_HOOKS:
      return {
        ...state,
        hooks: !action.payload
      };
      case FORM_CHANGE_STAND:
    return {
      ...state,
      stand: !action.payload
    };
    case FORM_CHANGE_THERMOMETER:
    return {
      ...state,
      thermometer: !action.payload
    };
    case FORM_CHANGE_FITTING:
    return {
      ...state,
      fitting: !action.payload
    };
    default:
      return state;
  }
};
