
import React from 'react'
import CustomTextInput from '../../CustomTextInput'
import GPCheckBox from '../../GPCheckBox/GPCheckBox'
import GPCustomTable from '../../GPCustomTable/GPCustomTable'
import {faArrowsUpDownLeftRight, faDrumSteelpan, faTrashCan} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const AddIngredientsTable = () => {

    const DeleteAction = ({ qty }) => (

        <div style={styles.boxMd}>
            <FontAwesomeIcon icon={faTrashCan} size={20} />
        </div>

    )


    const MoveAction = ({ qty }) => (

        <div style={styles.boxMd}>
          <FontAwesomeIcon icon={faArrowsUpDownLeftRight} size={20} />
        </div>

    )






    const _columns = [
        {
            title: "[I]Ingredient or [R]Recipe name",
            field: "ingredient_name",
            render: (rowData) => <CustomTextInput
                style={{ width: "280px", height: "40px", margin: 0 }}
                placeholder={rowData.ingredient_name}

            />
        },
        {
            title: "Net Qty",
            field: "net_qty",
            render: (rowData) => <CustomTextInput
                style={{ width: "100px", height: "40px", margin: 0 }}
                placeholder={rowData.net_qty}

            />
        },
        {
            title: "Unit",
            field: "unit",
            render: (rowData) => <CustomTextInput
                style={{ width: "100px", height: "40px", margin: 0 }}
                placeholder={rowData.unit}

            />
        },
        {
            title: "Prep Waste %",
            field: "prep_waste",
            render: (rowData) => <CustomTextInput
                style={{ width: "100px", height: "40px", margin: 0 }}
                placeholder={rowData.prep_waste}

            />
        },
        {
            title: "Remarks",
            field: "remarks",
            render: (rowData) => <CustomTextInput
                style={{ width: "180px", height: "40px", margin: 0 }}
                placeholder={rowData.remarks}

            />
        },
        {
            title: "Actions",
            field: "actions",
            render: (rowData) => <div style={{ display: "flex",justifyContent:"flex-start" }} >
                <MoveAction />
                <DeleteAction />
            </div>
        }
    ]

    const _data = [
        { ingredient_name: "Masala", net_qty: "4", unit: "5", prep_waste: "2", remarks: "Cut Into Small Pieces", actions: "" },
        { ingredient_name: "Nido", net_qty: "2", unit: "1", prep_waste: "0", remarks: "Pour ans stir", actions: "" },


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

export default AddIngredientsTable

const styles = {
    boxMd: {
        width: "22px",
        height: "22px",
        border: "0.5px solid #7a7a7a",
        borderRadius: "3px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"4px",
        
    }

}