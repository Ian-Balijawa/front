import {ThemeProvider} from '@mui/material/styles'
import { createRoot } from 'react-dom/client';
import App from './App'
import {theme} from './theme'

const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);