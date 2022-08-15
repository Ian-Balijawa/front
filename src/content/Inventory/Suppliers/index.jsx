import React from 'react'
import GPIconButton from '../../../components/GPIconButton'
import GPImportExportButton from '../../../components/GPImportExportButton/GPImportExportButton'
import {faFileExport, faFileImport} from '@fortawesome/free-solid-svg-icons'

import "../inventory.css"
import CustomPlusIconButton from '../../../components/CustomPlusIconButton'
import GPCard from '../../../components/GPCard/GPCard'
import GPSearchFilterCard from '../../../components/GPSearchFilterCard/GPSearchFilterCard'
import GPCustomTable from '../../../components/GPCustomTable'

const Suppliers = () => {
  return (
    <div className='supplier-main-wrapper'>

        <div className='supplier-top-container'>

            <GPImportExportButton />

            <CustomPlusIconButton
               title={"Add New Supplier"}
               onClick={()=> alert("add supplier")}
             />


        </div>

        <div className='supplier-search-container'>
           <GPSearchFilterCard />
        </div>

        <div className='supplier-table-container'>

          <GPCustomTable />

        </div>
      

    </div>
  )
}

export default Suppliers