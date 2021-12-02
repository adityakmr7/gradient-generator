import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { FormControlLabel, FormGroup, useTheme } from '@mui/material';
import { MaterialUISwitch } from './MaterialUiSwitch';
import { AppStateContext } from '../context';
import github from '../assets/img/GitHub_Logo.png';

export default function MainAppBar() {
  const { state, dispatch } = React.useContext(AppStateContext);
  const theme = useTheme();
  const handleThemeToggle = () => {
    dispatch({
      type: 'THEME'
    });
  };
  console.log('statethhhth', state);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              style={{
                textDecoration: 'none',
                display: 'block',
                margin: '1rem 0'
              }}
              to="/">
              <Typography color={theme.palette.text.primary} variant="body1">
                {' '}
                Gradient Generator
              </Typography>
            </Link>
          </Typography>

          <Box display="flex" flexDirection="row" alignItems="center">
            <a
              href="https://github.com/adityakmr7/gradient-generator"
              target="_blank"
              rel="noreferrer">
              <img style={{ width: '150px', height: '50px' }} src={github} />
            </a>
            <Box marginX={2}>
              <Link
                style={{
                  textDecoration: 'none',
                  textTransform: 'uppercase'
                }}
                to="/swatches">
                <Typography color={theme.palette.text.primary}>Swatches</Typography>
              </Link>
            </Box>

            <Box>
              <FormGroup>
                <FormControlLabel
                  onChange={handleThemeToggle}
                  control={<MaterialUISwitch sx={{ m: 1 }} theme={theme} defaultChecked />}
                  label=""
                />
              </FormGroup>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
