export const FORM_CHANGE_THICKNESS = 'FORM_CHANGE_THICKNESS';
export const FORM_CHANGE_STEEL = 'FORM_CHANGE_STEEL';
export const FORM_CHANGE_CHIPS = 'FORM_CHANGE_CHIPS';
export const FORM_CHANGE_WATERLOCK = 'FORM_CHANGE_WATERLOCK';
export const FORM_CHANGE_COVER = 'FORM_CHANGE_COVER';
export const FORM_CHANGE_HOOKS = 'FORM_CHANGE_HOOKS';
export const FORM_CHANGE_STAND = 'FORM_CHANGE_STAND';
export const FORM_CHANGE_THERMOMETER = 'FORM_CHANGE_THERMOMETER';
export const FORM_CHANGE_FITTING = 'FORM_CHANGE_FITTING';


export const changeThickness = thickness => ({
  type: FORM_CHANGE_THICKNESS,
  payload: thickness
});

export const changeSteel = steel => ({
  type: FORM_CHANGE_STEEL,
  payload: steel
});

export const changeChips = chips => ({
  type: FORM_CHANGE_CHIPS,
  payload: chips
});

export const changeWaterlock = waterlock => ({
  type: FORM_CHANGE_WATERLOCK,
  payload: waterlock
});

export const changeCover = cover => ({
  type: FORM_CHANGE_COVER,
  payload: cover
});

export const changeHooks = hooks => ({
  type: FORM_CHANGE_HOOKS,
  payload: hooks
});

export const changeStand = stand => ({
  type: FORM_CHANGE_STAND,
  payload: stand
});

export const changeThermometer = thermometer => ({
  type: FORM_CHANGE_THERMOMETER,
  payload: thermometer
});

export const changeFitting = fitting => ({
  type: FORM_CHANGE_FITTING,
  payload: fitting
});
