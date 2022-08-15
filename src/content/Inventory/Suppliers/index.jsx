import React,{useState} from 'react'
import GPIconButton from '../../../components/GPIconButton'
import GPImportExportButton from '../../../components/GPImportExportButton/GPImportExportButton'
import {faFileExport, faFileImport} from '@fortawesome/free-solid-svg-icons'

import "../inventory.css"
import CustomPlusIconButton from '../../../components/CustomPlusIconButton'
import GPSearchFilterCard from '../../../components/GPSearchFilterCard/GPSearchFilterCard'
import GPCustomTable from '../../../components/GPCustomTable'
import AddNewSupplier from './AddNewSupplier'

const Suppliers = () => {

 const [addNewSupplier, setAddNewSupplier] = useState(false)

  return (
    <div className='supplier-main-wrapper'>

        <div className='supplier-top-container'>

            <GPImportExportButton />

            <CustomPlusIconButton
               title={"Add New Supplier"}
               onClick={()=> setAddNewSupplier(true)}
             />


        </div>

        <div className='supplier-search-container'>
           <GPSearchFilterCard />
        </div>

        <div className='supplier-table-container'>

          <GPCustomTable />

        </div>

        {/* new supplier modal */}
        <AddNewSupplier show={addNewSupplier} handleClose={()=>setAddNewSupplier(false)} /> 
        
      

    </div>
  )
}

export default Suppliers