import initialState from './initialState';

import {
  FORM_CHANGE_THICKNESS,
  FORM_CHANGE_STEEL,
  FORM_CHANGE_CHIPS
} from './radio/actions';

import {
  FORM_CHANGE_WATERLOCK,
  FORM_CHANGE_COVER,
  FORM_CHANGE_HOOKS,
  FORM_CHANGE_STAND,
  FORM_CHANGE_THERMOMETER,
  FORM_CHANGE_FITTING
} from './checkbox/actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_CHANGE_THICKNESS:
      return {
        ...state,
        radio: {
          ...state.radio,
          thickness: {
            ...state.radio.thickness,
            checked: action.payload
          }
        }
      };
    case FORM_CHANGE_STEEL:
      return {
        ...state,
        radio: {
          ...state.radio,
          steel: {
            ...state.radio.steel,
            checked: action.payload
          }
        }
      };
    case FORM_CHANGE_CHIPS:
      return {
        ...state,
        radio: {
          ...state.radio,
          chips: {
            ...state.radio.chips,
            checked: action.payload
          }
        }
      };
    case FORM_CHANGE_WATERLOCK:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          waterlock: {
            ...state.checkbox.waterlock,
            checked: !action.payload
          },
          cover: {
            ...state.checkbox.cover,
            disabled: action.payload
          },
          hooks: {
            ...state.checkbox.hooks,
            disabled: !state.checkbox.cover.checked || !state.checkbox.cover.disabled
          }
        }
      };
    case FORM_CHANGE_COVER:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          cover: {
            ...state.checkbox.cover,
            checked: !action.payload
          },
          hooks: {
            ...state.checkbox.hooks,
            disabled: action.payload
          }
        }
      };
    case FORM_CHANGE_HOOKS:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          hooks: {
            ...state.checkbox.hooks,
            checked: !action.payload
          }
        }
      };
    case FORM_CHANGE_STAND:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          stand: {
            ...state.checkbox.stand,
            checked: !action.payload
          }
        }
      };
    case FORM_CHANGE_THERMOMETER:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          thermometer: {
            ...state.checkbox.thermometer,
            checked: !action.payload
          }
        }
      };
    case FORM_CHANGE_FITTING:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          fitting: {
            ...state.checkbox.fitting,
            checked: !action.payload
          }
        }
      };
    default:
      return state;
  }
};
