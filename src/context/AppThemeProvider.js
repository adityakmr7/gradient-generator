import { amber, deepOrange, grey } from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[600],
            secondary: grey[500]
          }
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: 'rgba(255, 255, 255, 0.12)',
          background: {
            default: '#121212',
            paper: '#121212'
          },
          text: {
            primary: '#fff',
            secondary: grey[500]
          }
        })
  }
});
