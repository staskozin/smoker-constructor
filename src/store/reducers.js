import {
  CHANGE_QUANTITY,
  BLUR_QUANTITY,
  CHANGE_THICKNESS,
  CHANGE_STEEL,
  CHANGE_CHIPS,
  CHANGE_SIZE,
  CHANGE_WATERLOCK,
  CHANGE_COVER,
  CHANGE_HOOKS,
  CHANGE_STAND,
  CHANGE_THERMOMETER,
  CHANGE_FITTING
} from './actions';
import initialState from './initialState';

import selectData from '../component/Form/Select/data';
import checkboxData from '../component/Form/Checkbox/data';

function getSizeState(thickness, waterlock, steel) {
  const list = '' + thickness + Number(waterlock) + steel;
  return {
    sizeList: list,
    size: selectData[list][0].value
  }
}

function getImageState(checkboxes) {
  const { waterlock, cover, hooks, stand, thermometer, fitting } = checkboxes;
  let hooksSrc, isHooksHidden;
  if (hooks.checked && !hooks.disabled) {
    hooksSrc = stand.checked ? 'hook_high' : 'hook_low';
    isHooksHidden = false;
  } else {
    isHooksHidden = true;
  }
  let src = '';
  src += Number(waterlock.checked);
  src += cover.disabled ? 0 : Number(cover.checked);
  src += Number(stand.checked)
  src += Number(thermometer.checked)
  src += Number(fitting.checked)
  return {
    img: {
      hooksSrc: hooksSrc,
      isHooksHidden: isHooksHidden,
      src: src
    }
  }
}

function getPrice(state) {
  let price = selectData[state.sizeList].find(elem => elem.value === state.size).price;
  for (const key in checkboxData) {
    price += state[key].checked && !state[key].disabled ? checkboxData[key].price : 0;
  }
  return {
    price,
    total: state.quantity < 1 ? price : price * state.quantity
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QUANTITY: {
      let quantity;
      if (isNaN(Number(action.payload))) {
        quantity = null;
      }
      else if (action.payload > 9999)
        quantity = 9999;
      else
        quantity = action.payload;
      return {
        ...state,
        quantity: quantity,
        total: quantity < 1 ? state.price : state.price * quantity
      };
    }
    case BLUR_QUANTITY: {
      const quantity = action.payload < 1 ? 1 : action.payload;
      return {
        ...state,
        quantity: quantity,
        total: state.price * quantity
      };
    }
    case CHANGE_THICKNESS: {
      let steel = state.steel;
      let waterlockChecked = state.waterlock.checked;
      let coverDisabled = state.cover.disabled;
      let hooksDisabled = state.hooks.disabled;
      if (action.payload === 0 || action.payload === 1) {
        steel = 1;
        waterlockChecked = true;
        coverDisabled = false;
        if (state.cover.checked) {
          hooksDisabled = false;
        }
      }
      const newState = {
        ...state,
        thickness: action.payload,
        steel: steel,
        ...getSizeState(action.payload, waterlockChecked, steel),
        waterlock: {
          ...state.waterlock,
          checked: waterlockChecked
        },
        cover: {
          ...state.cover,
          disabled: coverDisabled
        },
        hooks: {
          ...state.hooks,
          disabled: hooksDisabled
        }
      }
      return {
        ...newState,
        ...getImageState(newState)
      }
    }
    case CHANGE_STEEL: {
      const thickness = state.thickness === 0 || state.thickness === 1 ? 2 : state.thickness;
      let waterlockChecked = state.waterlock.checked;
      let coverDisabled = state.cover.disabled;
      let hooksDisabled = state.hooks.disabled;
      if (action.payload === 0 && (state.thickness === 2 || state.thickness === 3)) {
        waterlockChecked = true;
        coverDisabled = false;
        if (state.cover.checked) {
          hooksDisabled = false;
        }
      }
      const newState = {
        ...state,
        thickness: thickness,
        steel: action.payload,
        ...getSizeState(thickness, waterlockChecked, action.payload),
        waterlock: {
          ...state.waterlock,
          checked: waterlockChecked
        },
        cover: {
          ...state.cover,
          disabled: coverDisabled
        },
        hooks: {
          ...state.hooks,
          disabled: hooksDisabled
        }
      }
      return {
        ...newState,
        ...getImageState(newState)
      }
    }
    case CHANGE_CHIPS: {
      return {
        ...state,
        chips: action.payload
      }
    }
    case CHANGE_SIZE: {
      const newState = {
        ...state,
        size: Number(action.payload)
      }
      return {
        ...newState,
        ...getPrice(newState)
      }
    }
    case CHANGE_WATERLOCK: {
      const thickness = state.thickness === 0 || state.thickness === 1 ? 2 : state.thickness;
      const steel = state.steel === 0 && (state.thickness === 2 || state.thickness === 3) ? 1 : state.steel;
      const newState = {
        ...state,
        thickness: thickness,
        steel: steel,
        ...getSizeState(thickness, !state.waterlock.checked, steel),
        waterlock: {
          ...state.waterlock,
          checked: !state.waterlock.checked
        },
        cover: {
          ...state.cover,
          disabled: state.waterlock.checked
        },
        hooks: {
          ...state.hooks,
          disabled: !state.cover.checked || !state.cover.disabled
        }
      }
      return {
        ...newState,
        ...getImageState(newState)
      }
    }
    case CHANGE_COVER: {
      const newState = {
        ...state,
        cover: {
          ...state.cover,
          checked: !state.cover.checked
        },
        hooks: {
          ...state.hooks,
          disabled: state.cover.checked
        }
      }
      return {
        ...newState,
        ...getImageState(newState),
        ...getPrice(newState)
      }
    }
    case CHANGE_HOOKS: {
      const newState = {
        ...state,
        hooks: {
          ...state.hooks,
          checked: !state.hooks.checked
        }
      }
      return {
        ...newState,
        ...getImageState(newState),
        ...getPrice(newState)
      }
    }
    case CHANGE_STAND: {
      const newState = {
        ...state,
        stand: {
          ...state.stand,
          checked: !state.stand.checked
        }
      }
      return {
        ...newState,
        ...getImageState(newState),
        ...getPrice(newState)
      }
    }
    case CHANGE_THERMOMETER: {
      const newState = {
        ...state,
        thermometer: {
          ...state.thermometer,
          checked: !state.thermometer.checked
        }
      }
      return {
        ...newState,
        ...getImageState(newState),
        ...getPrice(newState)
      }
    }
    case CHANGE_FITTING: {
      const newState = {
        ...state,
        fitting: {
          ...state.fitting,
          checked: !state.fitting.checked
        }
      }
      return {
        ...newState,
        ...getImageState(newState),
        ...getPrice(newState)
      }
    }
    default:
      return state;
  }
}
