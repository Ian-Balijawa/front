import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#E46036',
      contrastText: '#fff',
    },
  },
});

const ButtonSaveChanges = ({text}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button color="neutral" variant="contained">
        {text}
      </Button>
    </ThemeProvider>
  );
}

export default ButtonSaveChanges
