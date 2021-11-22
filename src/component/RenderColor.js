import { Card, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { CompactPicker } from "react-color";
import { AppStateContext } from "../context";
import CircularSlider from "@fseehawer/react-circular-slider";
import Slider from "@mui/material/Slider";

function RenderColor() {
  const [value, setValue] = React.useState([20, 37]);
  const [initialColor, setInitialColor] = useState("");
  const [finalColor, setFinalColor] = useState("");
  const { state, dispatch } = useContext(AppStateContext);
  const handleCircularChange = (value) => {
    dispatch({
      type: "@updateAngle",
      payload: value,
    });
  };

  const onMSliderChange = (event, newValue) => {
    setValue(newValue);

    dispatch({
      type: "@updateSlider",
      payload: {
        min: newValue[0],
        max: newValue[1],
      },
    });
  };
  const handleIntialColor = (color) => {
    setInitialColor(color.hex);
    dispatch({
      type: "@initialColor",
      payload: color.hex,
    });
  };
  const handleFinalColor = (color) => {
    setFinalColor(color.hex);
    dispatch({
      type: "@finalColor",
      payload: color.hex,
    });
  };
  function valuetext(value) {
    return `${value}`;
  }
  return (
    <Container>
      <Card style={{ padding: "10px" }}>
        <Grid container direction="row">
          <Grid item width="100%">
            <Box marginTop={4} width="100%">
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={onMSliderChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
          </Grid>
          <Grid style={{ marginTop: "50px" }} item>
            <Grid
              spacing={5}
              direction="row"
              display="flex"
              justifyContent="space-between"
              container
            >
              <Grid item>
                <CircularSlider
                  progressColorFrom={state.initialColor}
                  progressColorTo={state.finalColor}
                  onChange={handleCircularChange}
                />
              </Grid>
              <Grid item>
                <Box justifyContent="space-around" display="flex" marginY={5}>
                  <Box>
                    <Typography>Initial Color</Typography>
                    <CompactPicker
                      color={initialColor}
                      onChangeComplete={handleIntialColor}
                    />
                  </Box>
                  <Box>
                    <Typography>FinalColor</Typography>
                    <CompactPicker
                      color={finalColor}
                      onChangeComplete={handleFinalColor}
                    />
                  </Box>
                </Box>
                <Box>{state.code}</Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default RenderColor;
