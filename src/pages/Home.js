import { Grid } from "@mui/material";
import React from "react";
import { RenderColor, RenderGradient } from "../component";

function Home() {
  return (
    <Grid container direction="column">
      <Grid item width="100%">
        <RenderGradient />
      </Grid>
      <Grid item width="100%">
        <RenderColor />
      </Grid>
    </Grid>
  );
}

export default Home;
