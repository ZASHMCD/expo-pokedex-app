// Action Types
import { actionTypes } from './types';

export const toggleMenuAction = isOpen => ({
  type: actionTypes.MENU.TOGGLE,
  isOpen
});
