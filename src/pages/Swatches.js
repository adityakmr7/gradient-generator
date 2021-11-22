import { CopyAllOutlined } from "@mui/icons-material";
import {
  Card,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { swatches } from "../data/gradient";

function Swatches() {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedItem, setCopiedItem] = useState("");
  const handleCopyToClip = async (data) => {
    let value = `backgroundImage: linear-gradient(${data.angle}deg ,${data.intialColor}  ,${data.finalColor})`;
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied((prev) => !prev);
      setCopiedItem(data.id);
    } catch (err) {}
  };

  return (
    <Container sx={{ marginTop: "60px" }}>
      <Grid container spacing={4}>
        {swatches.map((item, i) => {
          return (
            <Grid item key={item.id}>
              <Tooltip
                arrow
                title={`backgroundImage: linear-gradient(${item.angle}deg ,${item.intialColor},${item.finalColor})`}
              >
                <Card>
                  <Box
                    sx={{
                      margin: "10px",
                      backgroundImage: `linear-gradient(${item.angle}deg ,${item.intialColor}  , ${item.finalColor})`,
                      height: "200px",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {isCopied && item.id === copiedItem ? (
                      <Typography>Copied!</Typography>
                    ) : null}
                  </Box>
                  <Box margin="10px">
                    <IconButton onClick={() => handleCopyToClip(item)}>
                      <CopyAllOutlined />
                    </IconButton>
                  </Box>
                </Card>
              </Tooltip>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Swatches;
