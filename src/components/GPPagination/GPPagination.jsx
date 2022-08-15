import React from 'react'
import { PaginationLeftArrow, PaginationRightArrow } from '../GPIcon'
import './gp-pagination.css'

const GPPagination = ({ }) => {
    return (
        <div className='pagination-wrapper'>

            <div className='result-text'>
                4 Results
            </div>

            <div className='main-pagination'>

                <div className='icons'>

                    <PaginationLeftArrow />
                </div>
                <div className='count'>
                    1 - 4
                </div>
                <div className='icons'>
                    <PaginationRightArrow />
                </div>
            </div>

            <div className='pages-text'>
                20 PER PAGE
            </div>

        </div>
    )
}

export default GPPagination