import initialState from './initialState';

import {
  FORM_CHANGE_THICKNESS,
  FORM_CHANGE_STEEL,
  FORM_CHANGE_CHIPS
} from './radio/actions';

import {
  FORM_CHANGE_SIZE
} from './select/actions';

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
    case FORM_CHANGE_THICKNESS: {
      const sizeList = `${action.payload}${Number(state.checkbox.waterlock.checked)}${state.radio.steel.checked}`;
      return {
        ...state,
        radio: {
          ...state.radio,
          thickness: {
            ...state.radio.thickness,
            checked: action.payload
          }
        },
        select: {
          ...state.select,
          size: {
            ...state.size,
            list: sizeList
          }
        }
      };
    }
    case FORM_CHANGE_STEEL: {
      const thickness = action.payload === 0 && new Set([0, 1]).has(state.radio.thickness.checked) ? 2 : state.radio.thickness.checked;
      const sizeList = `${thickness}${Number(state.checkbox.waterlock.checked)}${action.payload}`;
      return {
        ...state,
        radio: {
          ...state.radio,
          steel: {
            ...state.radio.steel,
            checked: action.payload
          },
          thickness: {
            ...state.radio.thickness,
            checked: thickness
          }
        },
        select: {
          ...state.select,
          size: {
            ...state.size,
            list: sizeList
          }
        }
      };
    }
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
    case FORM_CHANGE_SIZE:
      return {
        ...state,
        select: {
          ...state.select,
          size: {
            ...state.select.size,
            selected: action.payload
          }
        }
      }
    case FORM_CHANGE_WATERLOCK: {
      const sizeList = `${state.radio.thickness.checked}${Number(!action.payload)}${state.radio.steel.checked}`;
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
        },
        select: {
          ...state.select,
          size: {
            ...state.size,
            list: sizeList
          }
        }
      };
    }
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
