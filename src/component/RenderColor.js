import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
// import { CompactPicker } from "react-color";
import { AppStateContext } from '../context';
import CircularSlider from '@fseehawer/react-circular-slider';
// import Slider from "@mui/material/Slider";
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

function RenderColor() {
  // const [value, setValue] = React.useState([20, 37]);
  const [color, setColor] = useColor('hex', '#121212');
  const [color2, setColor2] = useColor('hex', '#121212');

  const { state, dispatch } = useContext(AppStateContext);
  const handleCircularChange = (value) => {
    dispatch({
      type: 'UPDATE_ANGLE',
      payload: value
    });
  };

  // const onMSliderChange = (event, newValue) => {
  //   setValue(newValue);
  //   dispatch({
  //     type: "UPDATE_SLIDER",
  //     payload: {
  //       min: newValue[0],
  //       max: newValue[1],
  //     },
  //   });
  // };

  const handleIntialColor = (color) => {
    // setInitialColor(color.hex);
    setColor(color);
    dispatch({
      type: 'INITIAL_COLOR',
      payload: color
    });
  };
  const handleFinalColor = (color) => {
    // setFinalColor(color.hex);
    setColor2(color);
    dispatch({
      type: 'FINAL_COLOR',
      payload: color
    });
  };
  // function valuetext(value) {
  //   return `${value}`;
  // }

  return (
    <Container>
      <Grid container direction="row">
        {/* <Grid item width="100%">
          <Box marginTop={4} width="100%">
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={onMSliderChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        </Grid> */}
        <Grid style={{ marginTop: '50px' }} item>
          <Grid spacing={5} direction="row" display="flex" justifyContent="space-between" container>
            <Grid xs={3} item>
              <Box mt={7}>
                <CircularSlider
                  progressColorFrom={state.initialColor.hex}
                  progressColorTo={state.finalColor.hex}
                  onChange={handleCircularChange}
                  width={150}
                />
              </Box>
            </Grid>
            <Grid xs={9} item>
              <Box justifyContent="space-around" display="flex">
                <Box>
                  <Typography>Initial Color</Typography>
                  <ColorPicker
                    width={250}
                    height={228}
                    color={color}
                    onChange={handleIntialColor}
                    hideHSV
                    dark
                  />
                  {/* <CompactPicker
                    color={initialColor}
                    onChangeComplete={handleIntialColor}
                  /> */}
                </Box>
                <Box marginLeft={4}>
                  <Typography>FinalColor</Typography>
                  {/* <CompactPicker
                    color={finalColor}
                    onChangeComplete={handleFinalColor}
                  /> */}
                  <ColorPicker
                    width={250}
                    height={228}
                    color={color2}
                    onChange={handleFinalColor}
                    hideHSV
                    dark
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Card> */}
    </Container>
  );
}

export default RenderColor;
