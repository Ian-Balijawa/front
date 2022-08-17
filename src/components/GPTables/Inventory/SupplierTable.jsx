
import React from 'react'
import GPCustomTable from '../../GPCustomTable/GPCustomTable'
import SupplierTableActions from '../../SupplierTableActions/SupplierTableActions'


const SupplierTable = () => {

    const _columns = [
        {title:"Name",field:"name"},
        {title:"Total Orders Value (Ush)",field:"order_value"},
        {title:"Last Order Value",field:"last_order_value"},
        {title:"Statistics",field:"statistics"},
        {title:"Action",field:"action",render:(rowData)=> <SupplierTableActions record={rowData} />},
    ]

   const _data = [
        {name:"Nic&nico supplies", order_value:0,last_order_value:"N/A",statistics:"5%"},
        {name:"Juices & Co", order_value:200000,last_order_value:20000,statistics:"15%"},
        {name:"Semo & Bro", order_value:5500,last_order_value:50554,statistics:"13.55%"},


   ]

    return (

           <div> 

            <GPCustomTable
               columns={_columns}
               data={_data}
             />
            
          </div>
    

    )

}

export default SupplierTable