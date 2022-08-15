import React from 'react'
import GPIconButton from '../../../components/GPIconButton'
import GPImportExportButton from '../../../components/GPImportExportButton/GPImportExportButton'
import "../inventory.css"

const Suppliers = () => {
  return (
    <div className='supplier-main-wrapper'>

        <div className='supplier-top-container'>

            <GPImportExportButton />

            <GPIconButton
               title="Add New Supplier"
               icon="FaApple"
             />
        </div>

        <div className='supplier-search-container'>

        </div>

        <div className='supplier-table-container'>

        </div>
      

    </div>
  )
}

export default Suppliers