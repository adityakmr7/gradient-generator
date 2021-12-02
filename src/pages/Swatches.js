import { CopyAllOutlined } from '@mui/icons-material';
import { Card, Container, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import swatches from '../data/gradient.json';

function Swatches() {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedItem, setCopiedItem] = useState('');
  const [data, setData] = useState([]);
  const handleCopyToClip = async (data) => {
    let value = `backgroundImage: linear-gradient(${data.angle}deg ,${data.intialColor}  ,${data.finalColor})`;

    await navigator.clipboard.writeText(value);
    setIsCopied((prev) => !prev);
    setCopiedItem(data.id);
  };
  useEffect(() => {
    const d = swatches.map((item, i) => {
      item.id = i + 1;
      return item;
    });
    setData(d);
  }, []);
  return (
    <Container sx={{ marginTop: '60px' }}>
      <Grid container spacing={4}>
        {data.map((item) => {
          return (
            <Grid item key={item.id}>
              <Tooltip
                arrow
                title={`backgroundImage: linear-gradient(${item.angle}deg ,${item.intialColor},${item.finalColor})`}>
                <Card>
                  <Box
                    sx={{
                      margin: '10px',
                      backgroundImage: `linear-gradient(${item.angle}deg ,${item.intialColor}  , ${item.finalColor})`,
                      height: '200px',
                      width: '200px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    {isCopied && item.id === copiedItem ? <Typography>Copied!</Typography> : null}
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
