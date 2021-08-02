// Action Types
import { actionTypes } from '../actions/types';

const menuInitialState = {
  isOpen: false,
};

const toggleMenuReducerFn = (state = menuInitialState, action) => {
  switch (action.type) {
    case actionTypes.MENU.TOGGLE:
      return {
        isOpen: action.isOpen
      };
    default:
      return state;
  }
};

export default toggleMenuReducerFn;
