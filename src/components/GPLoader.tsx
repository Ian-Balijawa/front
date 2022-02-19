import React from 'react'
import {Loader, Dimmer} from 'semantic-ui-react'
type LoaderInterface = {
    color?: string
    size:
        | 'mini'
        | 'tiny'
        | 'small'
        | 'medium'
        | 'large'
        | 'big'
        | 'huge'
        | 'massive'
    inline: 'centered'
    active?: boolean
    className?: string
    inverted?: boolean
}
export const GPLoader = ({
    color,
    size,
    inline,
    active,
    className,
    inverted,
}: LoaderInterface) => {
    return (
        <Loader
            inverted={inverted}
            indeterminate={true}
            active={active}
            inline={inline}
            size={size}
            className={className}
        />
    )
}
