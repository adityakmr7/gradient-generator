import React, { useReducer } from "react";
import { appConstant } from "./constants";
import AppThemeProvider from "./AppThemeProvider";
export const AppStateContext = React.createContext();

// Linear Gradients (goes down/up/left/right/diagonally)
// Radial Gradients (defined by their center)
// Conic Gradients (rotated around a center point)

const initialState = {
  initialColor: "#ffffff",
  finalColor: "#000000",
  code: "",
  direction: 50,
  left: 50,
  right: 100,
  angle: 90,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case appConstant["@initialColor"]:
      return {
        ...state,
        initialColor: action.payload,
      };
    case appConstant["@finalColor"]:
      return { ...state, finalColor: action.payload };
    case appConstant["@updateCode"]:
      return {
        ...state,
        code: action.payload,
      };
    case appConstant["@updateAngle"]:
      return {
        ...state,
        angle: action.payload,
      };
    case appConstant["@updateSlider"]:
      return {
        ...state,
        left: action.payload.min, //min
        right: action.payload.max, //max
      };

    default:
      return {
        ...state,
      };
  }
}

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppThemeProvider>
      <AppStateContext.Provider value={{ state, dispatch }}>
        {children}
      </AppStateContext.Provider>
    </AppThemeProvider>
  );
};

export default AppContext;
