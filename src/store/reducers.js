import {
  UPDATE_SMOKER,
  CHANGE_QUANTITY,
  BLUR_QUANTITY
} from './actions';
import initialState from './initialState';


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

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SMOKER: {
      const { formState, price } = action.payload;
      return {
        ...state,
        ...formState,
        ...getImageState(formState),
        price: price,
        total: price * state.quantity
      }
    }
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
    default:
      return state;
  }
}
