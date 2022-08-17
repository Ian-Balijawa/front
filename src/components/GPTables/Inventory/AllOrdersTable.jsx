
import React from 'react'
import CustomGreenActionButton from '../../CustomGreenActionButton'
import CustomOrderIncreamentAction from '../../CustomOrderIncreamentAction'
import GPCustomTable from '../../GPCustomTable/GPCustomTable'
import SupplierTableActions from '../../SupplierTableActions/SupplierTableActions'


const AllOrdersTable = () => {



    

    const _columns = [
        {title:"EAN/UPC",field:"code"},
        {title:"Stock Item",field:"stock_item"},
        {title:"supplier",field:"supplier"},
        {title:"Par Qty",field:"par_qty"},
        {title:"Min Qty",field:"min_qty"},
        {title:"Stock",field:"stock"},
        {title:"Aggr Stock",field:"aggr-stock"},
        {title:"Ordering",field:"ordering",render:(rowData)=> <CustomOrderIncreamentAction record={rowData}/> },
        {title:"To Par",field:"to_par",render:(rowData)=> <CustomGreenActionButton record={rowData} />},
       
    ]

   const _data = [
        {code:"600128393", stock_item:"Rice",supplier:"Nic&Nico Suppliers",par_qty:0,min_qty:0,stock:0},
        {code:"600120003", stock_item:"Matooke",supplier:"Eddy Co",par_qty:30,min_qty:1,stock:0},
        {code:"760012555", stock_item:"Tin Tan",supplier:"Mega Supper",par_qty:1000,min_qty:50,stock:10000},


       


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

export default AllOrdersTable