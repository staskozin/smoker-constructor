import { UPDATE_SMOKER } from './actions';
import initialState from './initialState';

function getSmokerState(state) {
  const { radio, select, checkbox } = state;
  let price = select.sizes[select.size.list].find(elem => elem.value === select.size.selected).price;
  for (const key in checkbox) {
    price += checkbox[key].checked ? checkbox[key].price : 0;
  }
  return {
    price: price,
    chips: radio.chips.checked,
    size: select.size.selected,
    waterlock: {
      value: checkbox.waterlock.value,
      checked: checkbox.waterlock.checked
    },
    cover: {
      value: checkbox.cover.value,
      checked: checkbox.cover.checked,
      disabled: checkbox.cover.disabled
    },
    hooks: {
      value: checkbox.hooks.value,
      checked: checkbox.hooks.checked,
      disabled: checkbox.hooks.disabled
    },
    stand: {
      value: checkbox.stand.value,
      checked: checkbox.stand.checked
    },
    thermometer: {
      value: checkbox.thermometer.value,
      checked: checkbox.thermometer.checked
    },
    fitting: {
      value: checkbox.fitting.value,
      checked: checkbox.fitting.checked
    }
  }
}

function getImageState(smoker) {
  const { waterlock, cover, hooks, stand, thermometer, fitting } = smoker;
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
      const smoker = getSmokerState(action.payload);
      return Object.assign(smoker, getImageState(smoker));
    }
    default:
      return state;
  }
}
