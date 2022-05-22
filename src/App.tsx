
import Navigation from './route/Navigation'
import { createTheme } from '@mui/material';
import './App.css'

const font =  "'Roboto', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
  }
});

function App() {
    return <Navigation />
}

export default App
