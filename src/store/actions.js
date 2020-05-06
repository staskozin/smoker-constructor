// Info
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const BLUR_QUANTITY = 'BLUR_QUANTITY';

// Radio
export const CHANGE_THICKNESS = 'CHANGE_THICKNESS';
export const CHANGE_STEEL = 'CHANGE_STEEL';
export const CHANGE_CHIPS = 'CHANGE_CHIPS';

// Select
export const CHANGE_SIZE = 'CHANGE_SIZE';

// Checkbox
export const CHANGE_WATERLOCK = 'CHANGE_WATERLOCK';
export const CHANGE_COVER = 'CHANGE_COVER';
export const CHANGE_HOOKS = 'CHANGE_HOOKS';
export const CHANGE_STAND = 'CHANGE_STAND';
export const CHANGE_THERMOMETER = 'CHANGE_THERMOMETER';
export const CHANGE_FITTING = 'CHANGE_FITTING';

export const changeQuantity = quantity => {
  return {
    type: CHANGE_QUANTITY,
    payload: quantity
  }
}

export const blurQuantity = quantity => {
  return {
    type: BLUR_QUANTITY,
    payload: quantity
  }
}

export const changeThickness = thickness => {
  return {
    type: CHANGE_THICKNESS,
    payload: thickness
  }
}

export const changeSteel = steel => {
  return {
    type: CHANGE_STEEL,
    payload: steel
  }
}

export const changeChips = chips => {
  return {
    type: CHANGE_CHIPS,
    payload: chips
  }
}

export const changeSize = size => {
  return {
    type: CHANGE_SIZE,
    payload: size
  }
}

export const changeWaterlock = () => {
  return {
    type: CHANGE_WATERLOCK
  }
}

export const changeCover = () => {
  return {
    type: CHANGE_COVER
  }
}

export const changeHooks = () => {
  return {
    type: CHANGE_HOOKS
  }
}

export const changeStand = () => {
  return {
    type: CHANGE_STAND
  }
}

export const changeThermometer = () => {
  return {
    type: CHANGE_THERMOMETER
  }
}

export const changeFitting = () => {
  return {
    type: CHANGE_FITTING
  }
}
