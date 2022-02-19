import React from 'react'

type ButtonProperties = {
    btnText?: string
    borderRadius?: number
    border?: 'solid'
    borderColor?: string
    color?: string
    backgroundColor?: string
    borderWidth?: number
    width?: number
    style?: React.CSSProperties
    children?: React.ReactNode
}
const GPButton = (props: ButtonProperties) => {
    let btnStyle: ButtonProperties = {}
    const {
        btnText,
        borderRadius,
        border,
        borderColor,
        backgroundColor,
        color,
        borderWidth,
        width,
        style,
        children,
    } = props
    borderRadius
        ? (btnStyle['borderRadius'] = borderRadius)
        : (btnStyle['borderRadius'] = 0)
    border ? (btnStyle['border'] = border) : (btnStyle['border'] = 'solid')
    borderColor
        ? (btnStyle['borderColor'] = borderColor)
        : (btnStyle['borderColor'] = 'ButtonFace')
    backgroundColor
        ? (btnStyle['backgroundColor'] = backgroundColor)
        : (btnStyle['backgroundColor'] = 'ButtonFace')
    color ? (btnStyle['color'] = color) : (btnStyle['color'] = 'black')
    borderWidth
        ? (btnStyle['borderWidth'] = borderWidth)
        : (btnStyle['borderWidth'] = 5)
    width ? (btnStyle['width'] = width) : (btnStyle['width'] = 100)
    return (
        <div>
            <button
                className=" button ui primary btn"
                style={{...btnStyle, ...style}}
            >
                {btnText}
                {children}
            </button>
        </div>
    )
}
export default GPButton
