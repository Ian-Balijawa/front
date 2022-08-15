import React from 'react'
import GPCard from '../GPCard/GPCard'
import GPPagination from '../GPPagination/GPPagination'

import './gp-custom-table.css'

const GPCustomTable = ({colums,data}) => {



  return (
    <GPCard
      classes={"custom-table-card"}
    >

        {/* pagination container */}
        <div className='pagination-container'>
           <GPPagination />
        </div>

        {/* table */}


    </GPCard>
  )
}

export default GPCustomTable