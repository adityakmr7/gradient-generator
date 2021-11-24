import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { FormControlLabel, FormGroup, useTheme } from "@mui/material";
import { ColorModeContext } from "../context/AppThemeProvider";
import { MaterialUISwitch } from "./MaterialUiSwitch";
export default function MainAppBar() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              style={{
                textDecoration: "none",
                display: "block",
                margin: "1rem 0",
              }}
              to="/"
            >
              <Typography color={theme.palette.text.primary} variant="body1">
                {" "}
                Gradient Generator
              </Typography>
            </Link>
          </Typography>

          <Box display="flex" flexDirection="row" alignItems="center">
            <Box marginX={2}>
              <Link
                style={{
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
                to="/swatches"
              >
                <Typography color={theme.palette.text.primary}>
                  {" "}
                  Swatches
                </Typography>
              </Link>
            </Box>
            <Box>
              <FormGroup>
                <FormControlLabel
                  onChange={colorMode.toggleColorMode}
                  control={
                    <MaterialUISwitch
                      sx={{ m: 1 }}
                      theme={theme}
                      defaultChecked
                    />
                  }
                  label=""
                />
              </FormGroup>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
