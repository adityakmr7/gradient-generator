import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useMemo } from "react";
import { AppStateContext } from "../context";
import bmc from '../assets/img/bmc-btn.png';
import Slider from "@mui/material/Slider";
function RenderGradient() {
  const { state, dispatch } = useContext(AppStateContext);
  const [value, setValue] = React.useState([20, 37]);
  useMemo(
    () =>
      dispatch({
        type: "UPDATE_CODE",
        payload: `backgroundImage: linear-gradient(${state.angle}deg ,${state.initialColor.hex} ${state.left}%  , ${state.finalColor.hex} ${state.right}%)`,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.angle, state.left, state.right, state.finalColor, state.initialColor]
  );
  const onMSliderChange = (event, newValue) => {
    setValue(newValue);
    dispatch({
      type: "UPDATE_SLIDER",
      payload: {
        min: newValue[0],
        max: newValue[1],
      },
    });
  };
  
  function valuetext(value) {
    return `${value}`;
  }

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
      <Grid item width="100%">
        <Box mt={4}>
      <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={onMSliderChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
            </Box>
      </Grid>
      <Grid item width="100%">
      <Box mt={5} sx={{
                backgroundColor:'#000000',
                color: '#ffffff',
                padding:'20px'
              }} >
                
                {state.code}
                
              </Box>
      </Grid>
    </Grid>
  );
}

export default RenderGradient;
