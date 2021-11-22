import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useMemo } from "react";
import { AppStateContext } from "../context";
function RenderGradient() {
  const { state, dispatch } = useContext(AppStateContext);
  useMemo(
    () =>
      dispatch({
        type: "@updateCode",
        payload: `backgroundImage: linear-gradient(${state.angle}deg ,${state.initialColor} ${state.left}%  , ${state.finalColor} ${state.right}%)`,
      }),
    [state.angle, state.left, state.right, state.finalColor, state.initialColor]
  );
  return (
    <Grid container>
      <Grid item width="100%">
        <Box
          sx={{
            backgroundImage: `linear-gradient(${state.angle}deg ,${state.initialColor} ${state.left}%  , ${state.finalColor} ${state.right}%)`,
            height: "400px",
            width: "100%",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
}

export default RenderGradient;
