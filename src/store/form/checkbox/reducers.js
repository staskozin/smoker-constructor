import initialState from './initialState';

import {
  FORM_CHANGE_WATERLOCK,
  FORM_CHANGE_COVER,
  FORM_CHANGE_HOOKS,
  FORM_CHANGE_STAND,
  FORM_CHANGE_THERMOMETER,
  FORM_CHANGE_FITTING
} from './actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_CHANGE_WATERLOCK:
      return {
        ...state,
        waterlock: {
          ...state.waterlock,
          checked: !action.payload
        }
      };
    case FORM_CHANGE_COVER:
    return {
      ...state,
      cover: {
        ...state.cover,
        checked: !action.payload
      }
    };
    case FORM_CHANGE_HOOKS:
      return {
        ...state,
        hooks: {
          ...state.hooks,
          checked: !action.payload
        }
      };
      case FORM_CHANGE_STAND:
    return {
      ...state,
      stand: {
        ...state.stand,
        checked: !action.payload
      }
    };
    case FORM_CHANGE_THERMOMETER:
    return {
      ...state,
      thermometer: {
        ...state.thermometer,
        checked: !action.payload
      }
    };
    case FORM_CHANGE_FITTING:
    return {
      ...state,
      fitting: {
        ...state.fitting,
        checked: !action.payload
      }
    };
    default:
      return state;
  }
};
