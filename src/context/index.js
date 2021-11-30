import { createTheme, ThemeProvider } from "@mui/material";
import React, { useReducer } from "react";

import { reducer, initialState } from "./reducer";
import {getDesignTokens} from './AppThemeProvider';
export const AppStateContext = React.createContext();

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const theme = React.useMemo(
    () =>
      createTheme({
        ...getDesignTokens(state.mode),
        components: {
          MuiAppBar: {
            defaultProps: {
              color: "default",
            },
          },
          MuiContainer: {
            defaultProps: {
              color: "default",
            },
          },
        },
      }),
    [state.mode]
  );
  return (
      <AppStateContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
      </AppStateContext.Provider>
  );
};

export default AppContext;
