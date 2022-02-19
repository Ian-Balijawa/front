import React, { LegacyRef } from 'react'
type InputObject = {
    type?: 'text' | 'password'
    name?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    border?: string
    borderColor?: string
    borderWidth?: number
    borderRadius?: number
    style?: React.CSSProperties
    className?: string
    ref?: LegacyRef<HTMLInputElement>
}
const GPTextInput = (props: InputObject) => {
    let txtStyle: InputObject = {}
    const {
        type,
        name,
        placeholder,
        onChange,
        border,
        borderColor,
        borderWidth,
        borderRadius,
        style,
        className,
        ref,
    } = props
    border ? (txtStyle['border'] = border) : (txtStyle['border'] = 'solid')
    borderColor
        ? (txtStyle['borderColor'] = borderColor)
        : (txtStyle['borderColor'] = '#000')
    borderWidth
        ? (txtStyle['borderWidth'] = borderWidth)
        : (txtStyle['borderWidth'] = 1)
    borderRadius
        ? (txtStyle['borderRadius'] = borderRadius)
        : (txtStyle['borderRadius'] = 2)
    return (
        <div className="ui input">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                style={{...txtStyle, ...style}}
                onChange={onChange}
                className={className}
                ref={ref}
            />
        </div>
    )
}
export default GPTextInput
