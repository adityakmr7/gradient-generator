import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { amber, deepOrange, grey } from "@mui/material/colors";
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[600],
            secondary: grey[500],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: "rgba(255, 255, 255, 0.12)",
          background: {
            default: "#121212",
            paper: "#121212",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

function AppThemeProvider({ children }) {
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        ...getDesignTokens(mode),
        components: {
          MuiAppBar: {
            defaultProps: {
              enableColorOnDark: true,
              color: "default",
            },
          },
          MuiContainer: {
            defaultProps: {
              enableColorOnDark: true,
              color: "default",
            },
          },
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppThemeProvider;
