export const UPDATE_SMOKER = 'UPDATE_SMOKER';

export const updateSmoker = formState => {
  return {
    type: UPDATE_SMOKER,
    payload: formState
  }
}
