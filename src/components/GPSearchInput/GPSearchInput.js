import React from 'react'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './gp-search-input.css'
import Form from 'react-bootstrap/Form'

function GPSearchInput({label, placeholder = 'Search', ...props}) {
    return (
        <Form.Group>
            <Form.Label className="search-label">{label}</Form.Label>

            <div className="search">
                <div className="search-icon-container">
                    <FontAwesomeIcon
                        className="search-input-icon"
                        icon={faMagnifyingGlass}
                    />
                </div>

                <Form.Control
                    {...props}
                    className="form-control me-2"
                    type="search"
                    placeholder={placeholder}
                    aria-label="Search"
                />
            </div>
        </Form.Group>
    )
}

export default GPSearchInput

const styles = {
    label: {
        color: '#7A7A7A',
    },
}
