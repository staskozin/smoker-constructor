export const FORM_CHANGE_THICKNESS = 'FORM_CHANGE_THICKNESS';
export const FORM_CHANGE_STEEL = 'FORM_CHANGE_STEEL';

export const changeThickness = thickness => ({
  type: FORM_CHANGE_THICKNESS,
  payload: thickness
});

export const changeSteel = steel => ({
  type: FORM_CHANGE_STEEL,
  payload: steel
});
