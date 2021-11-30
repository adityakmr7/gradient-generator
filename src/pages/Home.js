import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { RenderColor, RenderGradient } from "../component";

function Home() {
  return (
    <Box margin={5}>

    <Grid container spacing={2} >
      <Grid item xs={6}  width="100%">
        <RenderGradient />
      
      </Grid>
      <Grid item xs={6} width="100%">
        <RenderColor />
       
      </Grid>
    </Grid>
    </Box>
  );
}

export default Home;
