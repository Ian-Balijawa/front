import * as React from 'react'
import useStyles from './AllStyles'
import Button from '@mui/material/Button'

const ButtonSaveStartNew = ({text, color, iconSrc}) => {
    /*
    Hearder button that takes 1 prop
    1. text - for button text
   */

    const classes = useStyles()

    return (
        <div>
            {iconSrc ? (
                <Button variant="outlined">
                    <img
                        className={classes.buttonIcon}
                        src={iconSrc}
                        alt="add item"
                    />
                    {text}
                </Button>
            ) : (
                <Button variant="outlined">{text}</Button>
            )}
        </div>
    )
}

export default ButtonSaveStartNew
