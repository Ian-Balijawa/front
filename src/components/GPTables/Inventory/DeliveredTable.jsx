
import React from 'react'
import GPCheckBox from '../../GPCheckBox/GPCheckBox'
import GPCustomTable from '../../GPCustomTable/GPCustomTable'




const DeliveredTable = () => {

    const BoxMd =({qty})=>(

        <div style={styles.boxMd}>
           {qty}
        </div>

    )


    
    const BoxLg = ({placeholder})=>(
       <div style={styles.boxLg}>
        {placeholder}
         {/* <GPSelectInput placeholder={placeholder}  /> */}
       </div>
    )

    const CheckBoxx = ()=>(
        <div style={styles.bx}>
           <GPCheckBox />
        </div>
    )

    

    const _columns = [
        {title:"Stock Item",field:"stock_item"},
        {title:"Ordered Qty",field:"ordered_qty"},
        {title:"Delivered Qty",field:"delivered_qty",render:(rowData)=> <BoxMd qty={rowData?.delivered_qty}/>},
        {title:"Delivery State",field:"delivery_state",render:(rowData)=> <BoxLg placeholder={rowData?.delivery_state} />},
        {title:"Expected Price",field:"expected_price"},
        {title:"Price Paid",field:"price_paid"},
        {title:"Update Price",field:"update_price",render:(rowData)=> <CheckBoxx/>  },

   
       
    ]

   const _data = [
        {stock_item:"Carrots Bulk 1kg", ordered_qty:"2 units of 500 g",delivered_qty:2,delivery_state:"All",expected_price:"ugx 20000",price_paid:"ush 20000"},
        {stock_item:"Spinach Leaves 1kg", ordered_qty:"1 Unit of 1kg",delivered_qty:1,delivery_state:"part",expected_price:"ugx 20000",price_paid:"ush 4400"},
        {stock_item:"Avocado (200g)", ordered_qty:"2 units of 500 g",delivered_qty:0,delivery_state:"none",expected_price:"ugx 20",price_paid:"ush 5000"}



   ]

    return (

           <div> 

            <GPCustomTable
               columns={_columns}
               data={_data}
               gppagination={false}
               toolbar={false}
             />
            
          </div>
    

    )

}

export default DeliveredTable

const styles = {
    boxMd:{
       width:"72px",
       height:"27px",
       border:"0.5px solid #7a7a7a",
       borderRadius:"3px",
       display:"flex",
       justifyContent:"center",
       alignItems:"center"
    },
    boxLg:{
       width:"131px",
       height:"27px",
       border:"0.5px solid #7a7a7a",
       borderRadius:"3px",
       display:"flex",
       justifyContent:"center",
       alignItems:"center"
    },
    bx:{
        width:"20px",
        height:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
}