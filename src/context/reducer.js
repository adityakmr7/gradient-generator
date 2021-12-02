// Linear Gradients (goes down/up/left/right/diagonally)
// Radial Gradients (defined by their center)
// Conic Gradients (rotated around a center point)

import { appConstant } from './constants';

export const initialState = {
  initialColor: { hex: '#4ecfcd' },
  finalColor: { hex: '#b6b439' },
  code: '',
  direction: 50,
  left: 50,
  right: 100,
  angle: 90,
  mode: 'light'
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case appConstant['INITIAL_COLOR']:
      return {
        ...state,
        initialColor: action.payload
      };
    case appConstant['FINAL_COLOR']:
      return { ...state, finalColor: action.payload };
    case appConstant['UPDATE_CODE']:
      return {
        ...state,
        code: action.payload
      };
    case appConstant['UPDATE_ANGLE']:
      return {
        ...state,
        angle: action.payload
      };
    case appConstant['UPDATE_SLIDER']:
      return {
        ...state,
        left: action.payload.min, //min
        right: action.payload.max //max
      };
    case 'THEME':
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light'
      };
    default:
      return {
        ...state
      };
  }
};
