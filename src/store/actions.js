export const UPDATE_SMOKER = 'UPDATE_SMOKER';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const BLUR_QUANTITY = 'BLUR_QUANTITY';

export const updateSmoker = formState => {
  return {
    type: UPDATE_SMOKER,
    payload: formState
  }
}

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
