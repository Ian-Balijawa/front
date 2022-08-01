import React from 'react'
import {render} from 'react-dom'
import App from './App'
import {theme} from './theme'
import {ThemeProvider} from '@mui/material/styles'

render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
