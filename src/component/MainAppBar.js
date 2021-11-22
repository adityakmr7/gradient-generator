import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
export default function MainAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "blue" : "#ffffff",
                };
              }}
              to="/"
            >
              Gradient Generator
            </NavLink>
          </Typography>

          <Box>
            <Link
              style={{
                textDecoration: "none",
                color: "#ffffff",
                textTransform: "uppercase",
              }}
              to="/swatches"
            >
              Swatches
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
