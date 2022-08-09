import React from 'react'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './gp-search-input.css'
import GPBlockButton from '../GPBlockButton'

function GPSearchInput({...props}) {
    return (
        <div className="d-flex">
            <div className="d-flex gap-2 search">
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />

                <input
                    {...props}
                    class="form-control me-2 rounded-pill"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <GPBlockButton
                    title={'Search'}
                    classes="bg-theme border-0 btn-sm"
                />
            </div>
        </div>
    )
}

export default GPSearchInput
