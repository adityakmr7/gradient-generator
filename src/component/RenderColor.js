import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { AppStateContext } from '../context';
import CircularSlider from '@fseehawer/react-circular-slider';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import bmc from '../assets/img/bmc-button.png';

function RenderColor() {
  const [color, setColor] = useColor('hex', '#121212');

  const [color2, setColor2] = useColor('hex', '#121212');

  const { state, dispatch } = useContext(AppStateContext);
  const handleCircularChange = (value) => {
    dispatch({
      type: 'UPDATE_ANGLE',
      payload: value
    });
  };
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
  return (
    <Container>
      <Grid container direction="row">
        <Grid style={{ marginTop: '5px' }} item>
          <Grid spacing={5} direction="row" display="flex" justifyContent="space-between" container>
            <Grid xs={3} item></Grid>
            <Grid xs={9} item>
              <Box justifyContent="space-around" display="flex">
                <Box>
                  <Typography fontWeight="bold">Initial Color</Typography>
                  <ColorPicker
                    width={250}
                    height={128}
                    color={color}
                    onChange={handleIntialColor}
                    hideHSV
                    dark
                  />
                </Box>
                <Box marginLeft={4}>
                  <Typography fontWeight="bold">FinalColor</Typography>
                  <ColorPicker
                    width={250}
                    height={128}
                    color={color2}
                    onChange={handleFinalColor}
                    hideHSV
                    dark
                  />
                </Box>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between" mt={6}>
                <CircularSlider
                  progressColorFrom={state.initialColor.hex}
                  progressColorTo={state.finalColor.hex}
                  onChange={handleCircularChange}
                  width={150}
                />
                <a
                  href="https://github.com/adityakmr7/gradient-generator"
                  target="_blank"
                  rel="noreferrer">
                  <img style={{ width: '150px', height: '50px' }} src={bmc} />
                </a>
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
