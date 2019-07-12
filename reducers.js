import { initialState } from './initial-state.js';
import { actionTypes } from './actions.js';
// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light,
      });
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: initialState.count,
      });
    default:
      return state;
  }
};
