import React from 'react'
import CustomPlusIconButton from '../../../components/CustomPlusIconButton/CustomPlusIconButton'
import GPCustomTable from '../../../components/GPCustomTable/GPCustomTable'
import GPLayout from '../../../components/GPLayout'

const OutletPreparation = () => {


    const columns = [
        {title:"Status",field:"status"},
        {title:"Created By",field:"create_by"},
        {title:"Sent/Owned By",field:"owner"},
        {title:"Started On",field:"started_on"},
        {title:"Ended On",field:"ended_on"},
        {title:"Stock Change",field:"stock_change"},
        {title:"Actions",field:"actions"},
        {title:"Remove",field:"remove"}

    ]


    const data = [
        {status:"Finalised",created_by:"Ann Flomaal",owner:"Ann Flomaal",started_on:"Tue July 19 13:47 2022",ended_on:"Tue July 19 13:47 2022"}
    ]



    return (
        <GPLayout>
            <div style={{ width: "100%", padding: "22px" }}>

                <div style={{ width: "100%", height: "84px", borderBottom: "0.5px solid rgba(122, 122, 122, 0.8)", display: "flex", alignItems: "center",justifyContent:"space-between" }}>
                    <h4>Creation Events from Bake My Day Entebbe</h4>

                    <CustomPlusIconButton
                       title="Record Creation"
                       url="/inventory/preparation/new"
                    />

                </div>

                <GPCustomTable
                   data={data}
                   columns={columns}
                />


            </div>
        </GPLayout>
    )
}

export default OutletPreparation