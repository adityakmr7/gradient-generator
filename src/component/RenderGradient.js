import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useMemo } from "react";
import { AppStateContext } from "../context";
import bmc from '../assets/img/bmc-btn.png';
function RenderGradient() {
  const { state, dispatch } = useContext(AppStateContext);
  useMemo(
    () =>
      dispatch({
        type: "UPDATE_CODE",
        payload: `backgroundImage: linear-gradient(${state.angle}deg ,${state.initialColor.hex} ${state.left}%  , ${state.finalColor.hex} ${state.right}%)`,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.angle, state.left, state.right, state.finalColor, state.initialColor]
  );

  return (
    <Grid container>
      <Grid item width="100%">
        <Box
          sx={{
            backgroundImage: `linear-gradient(${state.angle}deg ,${state.initialColor.hex} ${state.left}%  , ${state.finalColor.hex} ${state.right}%)`,
            height: "400px",
            width: "100%",
          }}
        >
          <a href="https://www.buymeacoffee.com/adityakmr" target="_blank" rel="noreferrer" >
          <Box position="absolute" right={0} >
          <img style={{
            height:'50px',
            width:'50px'
          }} src={bmc} alt="bmc"/>
          </Box>
          </a>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RenderGradient;
