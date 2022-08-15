import React from 'react'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './gp-search-input.css'
import GPBlockButton from '../GPBlockButton'

function GPSearchInput({label,placeholder="Search",...props}) {
    return (
       
          <div>
            <div className='search-label'>
                {label}
            </div>

            <div className="search">
                
                <div className='icon-container'>
                   <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                </div>

                <input
                    {...props}
                    class="form-control me-2"
                    type="search"
                    placeholder={placeholder}
                    aria-label="Search"
                />
            </div>
          </div>
    
    )
}

export default GPSearchInput

const styles = {

    label: {
        color: "#7A7A7A"
    }
}
