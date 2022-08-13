function GPSelectInput(props) {
    const {label, placeholder, name, arrayOfData, error, ...rest} = props

    const handleChange = event => {
        console.log('event.target.value => ', event.target.value)
    }

    const options = () => {
        console.log('first')
    }

    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <select name={name} onChange={handleChange} {...rest}>
                <option value="">{placeholder}</option>
                {options}
            </select>
            {error && <div className="error">{error}</div>}
        </>
    )
}

export default GPSelectInput
