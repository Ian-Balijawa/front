import * as React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import useStyles from './AllStyles'
import Button from '@mui/material/Button'

const ButtonSaveChanges = ({text, color, iconSrc}) => {
    /*
    Hearder button that takes 3 props
    1. text - for button text
    2. color - for button collor, can be hex string value
    3. iconSrc - imported svg icon variable passed to this prop as value, this prop is optional
   */

    const classes = useStyles()

    const theme = createTheme({
        palette: {
            neutral: {
                main: color,
                contrastText: '#fff',
            },
        },
    })

    return (
        <ThemeProvider theme={theme}>
            {iconSrc ? (
                <Button color="neutral" variant="contained">
                    <img
                        className={classes.buttonIcon}
                        src={iconSrc}
                        alt="add item"
                    />
                    {text}
                </Button>
            ) : (
                <Button color="neutral" variant="contained">
                    {text}
                </Button>
            )}
        </ThemeProvider>
    )
}

export default ButtonSaveChanges
