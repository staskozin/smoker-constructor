import { UPDATE_SMOKER } from './actions';

export default (state = {}, action) => {
  switch(action.type) {
    case UPDATE_SMOKER:
      return action.payload
    default:
      return state;
  }
}
