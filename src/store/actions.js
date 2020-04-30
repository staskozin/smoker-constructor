export const UPDATE_SMOKER = 'UPDATE_SMOKER';

export const updateSmoker = (data) => {
  return {
    type: UPDATE_SMOKER,
    payload: data
  }
}
